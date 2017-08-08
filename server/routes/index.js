/*
Inside the new routes folder, create an index.js file. We are going to place all our routes in this index.js file.

However, in a real-world application, you might want to split up your routes and place then in different folders.

e.g. different controllers define a different route then have index.js or app.js under routes here to import them all

instead of defining /api, /api/tools here

*/
const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;

module.exports = (app) => { //send back a JSON object
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  // post with a title
  app.post('/api/todos', todosController.create);

  // get all records
  app.get('/api/todos', todosController.list);

  // post with to do id
  app.post('/api/todos/:todoId/items', todoItemsController.create);

  app.get('/api/todos/:todoId', todosController.retrieve);

  // update with a title param
  app.put('/api/todos/:todoId', todosController.update);

  app.delete('/api/todos/:todoId', todosController.destroy);
};

/*
Next, we need to make the application aware that we just added the routes. Open up your app.js.

*/
