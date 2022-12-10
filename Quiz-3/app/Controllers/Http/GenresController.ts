import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';
import GenreValidator from 'App/Validators/GenreValidator';

export default class GenresController {
  // Get all
  public async index({response}: HttpContextContract) {
    const genres = await Database.from("genres").select("*")

    const games = await Database
            .from('genres')
            .join('games', 'genres.id', '=', 'games.genres_id')
            .select('games.id', 'games.title', "games.gameplay", "games.release_date")
            .orderBy('genres_id')

    const [{id,name}] = genres

    return response.ok({id, name, games}) 
   }

  // public async create({}: HttpContextContract) {}
  // Create
  public async store({request, response}: HttpContextContract) {
    const genre = await request.validate(GenreValidator);
    await Database
    .table('genres')
    .insert(genre)
    return response.ok({
      message: "Successfully Added genre"
    })
  }
  // Read
  public async show({response, params}: HttpContextContract) {
    const genreId = params.id
    const findGenre = await Database
      .from('genres')
      .where('id', genreId)
      .firstOrFail()

    return response.ok({
      message: "Succes",
      data: findGenre
    })
  }

  // public async edit({}: HttpContextContract) {}
  // Update
  public async update({request,response, params}: HttpContextContract) {
    const genreId = params.id
    const genre = await request.validate(GenreValidator);
    const updatedCategory = await Database
      .from('genres')
      .where('id', genreId)
      .update(genre)

      return response.ok({
        message: "Successfully updated genre id: " + genreId
      })
  }

  // Delete
  public async destroy({response, params}: HttpContextContract) {
    const genreId = params.id

    const deletedGenre = await Database
      .from('genres')
      .where('id', genreId)
      .delete()

      return response.ok({
        message: `Successfully deleted genre`
      })
  }
}
