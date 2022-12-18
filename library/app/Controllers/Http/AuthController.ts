import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
// import AuthValidateValidator from 'App/Validators/AuthValidateValidator'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Mail from '@ioc:Adonis/Addons/Mail'
import Database from '@ioc:Adonis/Lucid/Database'

export default class AuthController {
    public async register({request, response}: HttpContextContract){
        try {
            const name = request.input('name')
            const email = request.input('email')
            const password = request.input('password')
            const role = request.input('role')

            const newUser = await User.create({name, email, password, role})
            
            // const validate = await request.validate(AuthValidateValidator);
            await User.create(newUser);

            const otp_code = Math.floor(100000 + Math.random() * 900000)
            //let saveCode = 
            await Database.table("otp_codes").insert({otp_code: otp_code, user_id: newUser.id})

            await Mail.send((message) => {
                message
                  .from('welcome@library.com')
                  .to(email)
                  .subject('Getting started with library')
                  .htmlView('emails/otp_verification', { otp_code })
              })

            return response.created({
                message: "Register success. Please verify otp code to activated your account"
            })
        } catch (error) {
            return response.unprocessableEntity({
                message: error
            })
        }
    }

    public async otpConfirmation({request, response, auth}:HttpContextContract){
        let otpCode = request.input("otp_code")

        const isUser = await auth.user

        let otpCheck = await Database.query().from("otp_codes").where("otp_code", otpCode).first()

        if(isUser?.id == otpCheck?.user_id){
            isUser.isVerified = true
            await isUser?.save()
            return response.status(201).json({message: "Success verified OTP"})
        } else{
            return response.status(400).json({message: "Failed verified OTP"})
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
                    error: error.messages
                })
            }
        }
    }

    public async me({auth, response}: HttpContextContract){
        const user = await auth.user

        return response.ok({
           user
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

        await userData?.related("profiles").updateOrCreate({}, prePayload)

        return response.ok({
            message: "Success create/update profile"
        })
    }
}
