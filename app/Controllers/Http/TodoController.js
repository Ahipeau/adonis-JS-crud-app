const Todo = use('App/Models/Todo');

'use strict'

class TodoController {

    async index({request, response, view}){
        const todos = await Todo.all();
    
        return view.render('index', { todos: todos.rows })
    }
    
    create({request, response, view}){
        return view.render('create')
    }
    
    async store({request, response, view, session}){
        const todo = new Todo();
    
        todo.title = request.input('title');
        todo.description = request.input('description');
        await todo.save();
    
        session.flash({ notification: 'Création avec succès!' });
        return response.route('Todo.index')
    }
    
    async edit({request, response, view, params}){
        const id = params.id;
        const todo = await Todo.find(id);
    
        return view.render('edit', { todo : todo})
    }
    
    async update({request, response, view, params, session}){
        const id = params.id;
        const todo = await Todo.find(id);
        todo.title = request.input('title');
        todo.description = request.input('description');
        await todo.save();
    
        session.flash({ notification: 'Modification avec succès!' });
        response.redirect('/')
    }
    
    async delete({request, response, view, params, session}){
        const id = params.id;
        const todo = await Todo.find(id);
        await todo.delete();
    
        session.flash({ notification: 'Suppression avec succès!' });
        response.redirect('/')
    }
}

module.exports = TodoController
