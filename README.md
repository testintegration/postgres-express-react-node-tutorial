https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize#toc-generating-models
# nodemon npm package
we'll need a way to restart the server every time we change something in our code. For that, we'll use the excellent nodemon npm package.

# npm install -g sequelize-cli
# npm install --save sequelize pg pg-hstore
pg will be responsible for creating the database connection while pg-hstore is a module for serializing and deserializing JSON data into the Postgres hstore format.
#sequelize init
Now, with the paths defined, we will need to run the init command in order to create the specified folders e.g. config folder and config.js and generate boilerplate code.

The config.json file contain our application configuration settings, such as database authentication configuration.
migrations folder will hold our application's migrations, while the models folder will hold the application models.
Seed data is initial data provided with a system for testing, training or templating purposes. The seeders folder typically holds seed data, but we're not going to be using that in this tutorial.


#createdb todos-dev
this does not work. asking for a password. Updated C:\Program Files (x86)\PostgreSQL\9.5\data\ pg_hba.cnf to use trust instead of md5
createdb command will be available to us after installing PostgreSQL.

export DATABASE_URL=our-database-url

{
  "development": {
    "use_env_variable": "DATABASE_URL"
  },
  "test": {
    "username": "waiyaki",
    "password": null,
    "database": "todos-test",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  }
}

## Models
We are going to have two models, Todo and TodoItem. The relationship between a Todo and it's TodoItems is going to be one-to-many, such that a Todo can have many TodoItems while a TodoItem can only belong to one Todo.
#sequelize model:create --name Todo --attributes title:string
#sequelize model:create --name TodoItem --attributes content:string,complete:boolean

#sequelize db:migrate

## Create a routes folder inside the server folder
