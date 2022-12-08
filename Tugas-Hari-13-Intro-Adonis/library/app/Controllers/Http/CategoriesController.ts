import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import CategoryValidator from 'App/Validators/CategoryValidator'

export default class CategoriesController {
  // Tampil semua kategory
  public async index({response}: HttpContextContract) {
    const categories = await Database.from("categories").select("*");
    return response.ok({
      message: "Success",
      data: categories
    })
  }

  // public async create({}: HttpContextContract) {}
  // tambah all kategori
  public async store({request, response}: HttpContextContract) {

    const category = await request.validate(CategoryValidator);
    await Database
    .table('categories')
    .insert(category)

    return response.ok({
      message: "Successfully Added Category"
    })

  }

  // Tampilkan detail kategori
  public async show({response, params}: HttpContextContract) {
    const categoryId = params.id
    const findCategory = await Database
      .from('categories')
      .where('id', categoryId)
      .firstOrFail()

    return response.ok({
      message: "Succes",
      data: findCategory
    })
  }

  // public async edit({}: HttpContextContract) {}
  // perbarui kategori by id
  public async update({request,response, params}: HttpContextContract) {
    const categoryId = params.id
    const category = await request.validate(CategoryValidator);
    const updatedCategory = await Database
      .from('categories')
      .where('id', categoryId)
      .update(category)

      return response.ok({
        message: "Successfully updated id: " + categoryId
      })

  }

  // Hapus kategory by id
  public async destroy({response, params}: HttpContextContract) {
    const categoryId = params.id

    const deletedCategory = await Database
      .from('categories')
      .where('id', categoryId)
      .delete()

      return response.ok({
        message: "Successfully deleted id: " + categoryId
      })
  }
}
