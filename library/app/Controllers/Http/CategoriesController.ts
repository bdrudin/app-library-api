import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CategoryValidator from 'App/Validators/CategoryValidator'
import Categorie from 'App/Models/Categorie'


export default class CategoriesController {
  // Tampil semua kategory
  public async index({response}: HttpContextContract) {
    const categories = await Categorie.query().preload('books')
    return response.ok({
      message: "Success",
      categories
    })
  }

  // public async create({}: HttpContextContract) {}
  // tambah kategori
  public async store({request, response}: HttpContextContract) {

    const category = await request.validate(CategoryValidator);
    await Categorie.create(category)
    return response.created({
      message: "Successfully Added Category"
    })

  }

  // Tampilkan detail kategori
  public async show({response, params}: HttpContextContract) {
    const categoryId = params.id
    try {
      const findCategory = await Categorie.query().where("id", categoryId).preload("books").firstOrFail()
  
      return response.ok({
        message: "Success found categories",
        data: findCategory
      })
    } catch (err) {
      response.status(404)
      return response.ok({
        error: err.message
      })
    }
  }

  // public async edit({}: HttpContextContract) {}

  // perbarui kategori by id
  public async update({request,response, params}: HttpContextContract) {
    const categoryId = params.id
    const category = await request.validate(CategoryValidator);
    await Categorie.query()
      .where('id', categoryId)
      .update(category)

      return response.ok({
        message: "Successfully updated id: " + categoryId
      })

  }

  // Hapus kategory by id
  public async destroy({response, params}: HttpContextContract) {
    const categoryId = params.id

    const deletedCategory = await Categorie.findOrFail(categoryId)
    await deletedCategory.delete()
      return response.ok({
        message: "Successfully deleted id: " + categoryId
      })
  }
}
