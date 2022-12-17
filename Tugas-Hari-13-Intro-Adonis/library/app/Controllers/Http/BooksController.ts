import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import BooksValidationValidator from 'App/Validators/BooksValidationValidator';
import Book from 'App/Models/Book';

export default class BooksController {
    public async index({response}: HttpContextContract) {
        const books = await Book.query().preload("categorie").preload("users")

        return response.ok({
          message: "Success",
          books
        })
      }
      
    public async store({request, response}: HttpContextContract) {
        const books = await request.validate(BooksValidationValidator);
        
        await Book.create({...books , release_date: books.release_date.toSQLDate()})

        // await Database
        // .table('books')
        // .insert({...payload, release_date: payload.release_date.toSQLDate()})

        return response.created({
          message: "Successfully Added book"
        })
        
      }

      public async show({response, params}: HttpContextContract) {
        const book_id = params.id
        // const findBook = await Database
        //   .from('books')
        //   .where('id', book_id)
        //   .firstOrFail()
    
        // return response.ok({
        //   message: "Success",
        //   data: findBook
        // })
        try {
          const findBook = await Book.query().where('id', book_id).preload("categorie").firstOrFail()
      
          return response.ok({
            message: "Succes",
            data: findBook
          })
        } catch (err) {
          response.status(404)
          return response.ok({
            error: err.message
          })
        }
      }

      public async update({request,response, params}: HttpContextContract) {
        const book_id = params.id
        const books = await request.validate(BooksValidationValidator);
        await Book.query()
          .where('id', book_id)
          .update({...books, release_date: books.release_date.toSQLDate()})
          return response.ok({
            message: "Successfully updated id: " + book_id
          })
      }

      public async destroy({response, params}: HttpContextContract) {
        const book_id = params.id
    
        const deletedBook = await Book.findOrFail(book_id)
        await deletedBook.delete()
    
          return response.ok({
            message: "Successfully deleted id: " + book_id
          })
      }
}
