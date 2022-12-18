/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
    Route.resource("categories", "CategoriesController").apiOnly();
    Route.resource("books", "BooksController").apiOnly();

    Route.post("/register", "AuthController.register")
    Route.post("/login", "AuthController.login")
    Route.post("/otp-confirmation", "AuthController.otpConfirmation").middleware('auth')
    Route.post("/profile", "AuthController.Updateprofile").middleware(['auth', 'verify'])
    
    Route.get("/me", "AuthController.me").middleware('auth')

  }).prefix('/api/v1')

Route.group(() => {
    Route.post("/book/:id/borrow", "BorrowsController.store").middleware(['auth', 'verify'])
    Route.get("/borrow/:id", "BorrowsController.show").middleware(['auth', 'verify'])
    Route.get("/borrow", "BorrowsController.index").middleware(['auth', 'verify'])
  }).prefix('/api/v1')