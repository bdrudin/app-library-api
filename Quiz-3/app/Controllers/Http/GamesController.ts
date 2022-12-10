import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import GameValidator from 'App/Validators/GameValidator';

export default class GamesController {
  public async index({response}: HttpContextContract) {
    const game = await Database.from("games").select("*");

    return response.ok({
      message: "Successfully",
      data: game
    })
  }

  // public async create({}: HttpContextContract) {}

    // Create
    public async store({request, response}: HttpContextContract) {
      const game = await request.validate(GameValidator);
      await Database
      .table('games')
      .insert({...game, release_date: game.release_date.toSQLDate()})

      const {title, gameplay,release_date, genres_id} = game
      
      return response.ok({
        title, gameplay,release_date, genres_id
      })
    }
    // Show game by id
    public async show({response, params}: HttpContextContract) {
      const gameId = params.id
      const games = await Database
        .from('games')
        .where('id', gameId)
        .firstOrFail()

      const {title, gameplay,release_date, genres_id} = games

      return response.ok({
        title, gameplay,release_date, genres_id
      })
    }

  // public async edit({}: HttpContextContract) {}

  // Update
  public async update({request,response, params}: HttpContextContract) {
    const gameId = params.id
    const game = await request.validate(GameValidator);
    const updatedGames = await Database
      .from('games')
      .where('id', gameId)
      .update({...game, release_date: game.release_date.toSQLDate()})

      return response.ok({
        message: "Successfully updated game id: " + gameId
      })
  }

  // Delete
  public async destroy({response, params}: HttpContextContract) {
    const gameId = params.id

    const deletedGame = await Database
      .from('games')
      .where('id', gameId)
      .delete()

      return response.ok({
        message: `Successfully deleted game`
      })
  }
}
