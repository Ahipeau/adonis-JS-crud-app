'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')

//Appel index et view de la table Todo
Route.get ('/', 'TodoController.index'). As ('Todo.index') 
Route.get ('/ create', 'TodoController.create'). As ('Todo.create') 
Route.get ('/ edit /: id', 'TodoController.edit'). as ('Todo.edit') 
Route.get ('/ delete /: id', 'TodoController.delete'). as ('Todo.delete' ) 
Route.post ('/ store', 'TodoController.store'). As ('Todo.store') 
Route.post ('/ update /: id', 'TodoController.update'). As ('Todo.update ')