const storage = require('../../infrastructure/db.js');

module.exports = {
  add(...todo) {
    const todoList = storage.get();
    todoList.push(...todo);
  },
  remove(todo) {
    const todoList = storage.get();
    const todoIndex = todoList.findIndex((t) => t === todo);
    todoList.splice(todoIndex, 1);
  },
  find(id) {
    const todoList = storage.get();
    return todoList.find(todo => todo.id === id);
  },
  get() {
    return storage.get();
  },
  save() {
    storage.save();
  },
};
