/* manually created file - exporting our controllers from
 I find this helpful since it helps me consolidate my imports (require statements) from once central place.
*/
const todos = require('./todos');
const todoItems = require('./todoitems');

module.exports = {
  todos,
  todoItems,
};
