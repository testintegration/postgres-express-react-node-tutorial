//autogerated by sequelize db:migrate: <date>-create-todo.js
/*
When we run these migrations, the up function will be executed.
It will take care of creating the table and it's associated columns for us.

If, for whatever reason, we needed to rollback (undo) the migration, the down function would be executed and
it would undo whatever the up function did, thus returning the our database to the same state it was in before we performed the migration.


*/
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface /* , Sequelize */) => queryInterface.dropTable('Todos'),
};
