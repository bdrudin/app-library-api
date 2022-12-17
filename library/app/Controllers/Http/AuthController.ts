import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import AuthValidateValidator from 'App/Validators/AuthValidateValidator'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class AuthController {
    public async register({request, response}: HttpContextContract){
        try {
            const validate = await request.validate(AuthValidateValidator);

            await User.create(validate);
            return response.created({
                message: "Register berhasil"
            })
        } catch (error) {
            return response.unprocessableEntity({
                message: error
            })
        }
    }

    public async login({request, response, auth}: HttpContextContract){

        
        try {
            const loginValidation = schema.create({
                email: schema.string({}, [
                    rules.email()
                ]),
                password: schema.string()
            })

            await request.validate({schema: loginValidation})

            const email = request.input('email')
            const password = request.input('password')

            // try {
              const token = await auth.use('api').attempt(email, password,{
                expiresIn: '7 Days'
              })
            return response.ok({
                message: "Login success",
                token
            })

        } catch (error) {
            if(error.guard){
                return response.badGateway({
                    message: "Login validasi error",
                    error: error
                })
            } else{
                return response.badRequest({
                    message: "Login error",
                    error: error.message
                })
            }
        }
    }

    public async me({auth, response}: HttpContextContract){
        const user = await auth.user

        return response.ok({
            message: user
        })
    }

    public async Updateprofile({auth, request, response}: HttpContextContract){
        const userData = auth.user;

        const profileValidate = schema.create({
            address: schema.string(),
            bio: schema.string(),
        })

        await request.validate({schema: profileValidate})

        const address = request.input("address")
        const bio = request.input("bio")

        const prePayload = {
            address,
            bio
        }

        await userData?.related("profile").updateOrCreate({}, prePayload)

        return response.ok({
            message: "Success update profile"
        })
    }
}
