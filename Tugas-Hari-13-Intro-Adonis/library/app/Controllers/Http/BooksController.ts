import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import BooksValidationValidator from 'App/Validators/BooksValidationValidator';
import Database from '@ioc:Adonis/Lucid/Database';

export default class BooksController {
    public async index({response}: HttpContextContract) {
        const payload = await Database.from("books").select("*");

        return response.ok({
          message: "Success",
          data: payload
        })
      }
      
    public async store({request, response}: HttpContextContract) {
        const payload = await request.validate(BooksValidationValidator);
        await Database
        .table('books')
        .insert({...payload, release_date: payload.release_date.toSQLDate()})

        return response.ok({
          message: "Successfully Added book"
        })
        
      }

      public async show({response, params}: HttpContextContract) {
        const book_id = params.id
        const findBook = await Database
          .from('books')
          .where('id', book_id)
          .firstOrFail()
    
        return response.ok({
          message: "Success",
          data: findBook
        })
      }

      public async update({request,response, params}: HttpContextContract) {
        const book_id = params.id
        const payload = await request.validate(BooksValidationValidator);
        const updatedBook = await Database
          .from('books')
          .where('id', book_id)
          .update(payload)
    
          return response.ok({
            message: "Successfully updated id: " + book_id
          })
      }

      public async destroy({response, params}: HttpContextContract) {
        const book_id = params.id
    
        const deletedBook = await Database
          .from('books')
          .where('id', book_id)
          .delete()
    
          return response.ok({
            message: "Successfully deleted id: " + book_id
          })
      }
}
