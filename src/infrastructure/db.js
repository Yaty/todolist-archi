const fs = require('fs')
const Todo = require('../domain/business/todo');
const defaultFilePath = process.env.TODOLIST_FILE_PATH || 'todolist.json';

let instance;

module.exports = {
  get() {
    if (instance) {
      return instance;
    }

    // Deserialize
    instance = JSON.parse(fs.readFileSync(defaultFilePath).toString()).map((t) => {
      const todo = new Todo(t.text, new Date(t.date));
      todo.id = t.id;
      todo.state = t.state;
      return todo;
    });

    return instance;
  },
  save() {
    // Serialize
    fs.writeFileSync(defaultFilePath, JSON.stringify(this.get()));
  },
};
