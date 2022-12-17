import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Borrow from 'App/Models/Borrow'
// import User from 'App/Models/User'

export default class BorrowsController {
    public async store({request, response, auth, params}: HttpContextContract){
        try {
            const userDataId = auth.user?.id

            await Borrow.create({
                user_id: userDataId,
                book_id: params.id,
                loan_date: request.input("loan_date"),
                return_date: request.input("return_date")
            })

            return response.created({
                message: "Successfully loan"
            })
        } catch (error) {
            return response.badRequest({
                message: error
            })
        }

    }

    public async index({response}: HttpContextContract){
        try {
            const dataBorrow = await Borrow.query().preload("books").preload("user")
            
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
            const dataBorrow = await Borrow.query().where("id", params.id).preload("books").preload("user").firstOrFail()
            return response.ok({
                message: "Successfully show borrow",borrow: dataBorrow})
        } catch (error) {
            return response.badRequest({message: error})
        }
    }
}
