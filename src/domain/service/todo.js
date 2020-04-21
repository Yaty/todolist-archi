const Todo = require('../business/todo');

module.exports = {
  create(text, date) {
    return new Todo(text, date);
  },
};
