import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BooksValidationValidator from 'App/Validators/BooksValidationValidator'
BooksValidationValidator

export default class BooksController {
    public async store({request, response}: HttpContextContract){
        try {
           const books = await request.validate(BooksValidationValidator)
         response.ok({
             message: "Success Validasi",
             data: books
         })
        } catch (error) {
         response.badRequest({
             message: "Failed validasi",
             errors: error["messages"].errors
         })
        } 
     }
}
