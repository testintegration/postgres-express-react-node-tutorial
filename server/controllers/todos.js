// manually created file
/* expose map of functions
module.exports - {
  function1() {},
 function2() {},
}
}

*/
const Todo = require('../models').Todo; // it knows to find ToDo exports

/*The above code snippet creates a new todo and if successful, it returns it. If it encounters an error, it returns that error instead.
(Granted, this isn't the best way to handle these errors, but we'll go with it for now, for the sake of simplicity. ;))*/

/*
This create function is designed to be a route handler for whichever Express route we'll choose to attach it to.

The req parameter is the incoming request from the client.
The res parameter is the response we're preparing to eventually send back to the client in response to their request :).

All Express route handlers follow this method signature. We can have a third parameter, conventionally named next,
which is a function that passes the request on to the next route handler (meaning that a route can be handled by multiple route handlers,
 in which case it's piped or passed along all of those route handlers). We are, however,
 not going to see a use case for that in this application :(.

*/
module.exports = {
  create(req, res) {
    return Todo
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};
