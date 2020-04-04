const Todo = use('App/Models/Todo');

'use strict'

class TodoController {

    index asynchrone ({demande, réponse, vue}) { 
        const todos = attendre Todo.all (); 
    
        return view.render ('index', {todos: todos.rows}) 
    } 
    
    create ({request, response, view}) { 
        return view.render ('create') 
    } 
    
    async store ({request, response, view, session, session }) { 
        const todo = new Todo (); 
    
        todo.title = request.input ('title'); 
        todo.description = request.input ('description'); 
        attendre todo.save (); 
    
        session.flash ({notification: 'Créer avec succès!'}); 
        return response.route ('Todo.index') 
    } 
    
    async edit ({request, response, view, params}) { 
        const id = params.id; 
        const todo = attendre Todo.find (id);
    
        return view.render ('edit', {todo: todo}) 
    } 
    
    mise à jour asynchrone ({request, response, view, params, session}) { 
        const id = params.id; 
        const todo = attendre Todo.find (id); 
        todo.title = request.input ('title'); 
        todo.description = request.input ('description'); 
        attendre todo.save (); 
    
        session.flash ({notification: 'Mise à jour réussie!'}); 
        response.redirect ('/') 
    } 
    
    async delete ({demande, réponse, vue, paramètres, session}) { 
        const id = params.id; 
        const todo = attendre Todo.find (id); 
        attendre todo.delete (); 
    
        session.flash ({notification: 'Suppression réussie!'}); 
        response.redirect ('/') 
    }
}

module.exports = TodoController
