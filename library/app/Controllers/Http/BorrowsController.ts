import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Borrow from 'App/Models/Borrow'
import { schema } from '@ioc:Adonis/Core/Validator'

// import BorrowValidator from 'App/Validators/BorrowValidator'
// import User from 'App/Models/User'

export default class BorrowsController {
    public async store({request, response, auth, params}: HttpContextContract){
        try {
            const userDataId = auth.user?.id

            const borrowValidation = schema.create({
                loan_date: schema.date({
                  format: 'dd-MM-yyyy'
                }),
                return_date: schema.date({
                  format: 'dd-MM-yyyy'
                }),
              })
            
            await request.validate({schema: borrowValidation})
            const loan_date = request.input("loan_date")
            const return_date = request.input("return_date")


            await Borrow.create({
                user_id: userDataId,
                book_id: params.id,
                loan_date,
                return_date
            })

            return response.created({
                message: "Successfully borrow"
            })
        } catch (error) {
            return response.unprocessableEntity({
                error
            })
        }

    }

    public async index({response}: HttpContextContract){
        try {
            const dataBorrow = await Borrow.query().preload("books").preload("users")
            
            return response.ok({
                message: "Successfully show borrows",
                borrows: dataBorrow
            })
        } catch (error) {
            return response.badRequest(error)
        }
    }

    public async show({response, params}: HttpContextContract){
        try {
            const dataBorrow = await Borrow.query().where("id", params.id).preload("books").preload("users").firstOrFail()
            return response.ok({
                message: "Successfully show borrow",borrow: dataBorrow})
        } catch (error) {
            return response.badRequest({message: error})
        }
    }
}
