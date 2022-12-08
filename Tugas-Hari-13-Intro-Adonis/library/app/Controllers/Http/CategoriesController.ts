import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CategoriesValidationValidator from 'App/Validators/CategoriesValidationValidator'
CategoriesValidationValidator

export default class CategoriesController {
    public async store({request, response}: HttpContextContract){
        try {
           const categories = await request.validate(CategoriesValidationValidator);
           
         response.ok({
             message: "Succes validation categories",
             data: categories
         })
        } catch (error) {
         response.badRequest({
             message: "Failed validation categories",
             errors: error["messages"].errors
         })
        } 
     }
}
