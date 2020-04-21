require('dotenv').config();
const todoService = require('../domain/service/todo');
const todoListService = require('../domain/service/todolist');
const printerService = require('../domain/service/printer');

const actions = {
  get() {
    const todoList = todoListService.get();
    printerService.print(todoList);
  },
  add(text) {
    const todo = todoService.create(text, new Date());
    todoListService.add(todo);
    todoListService.save();
    printerService.print([todo]);
  },
  done(id) {
    const todo = todoListService.find(id);

    if (!todo) {
      throw new Error('Todo not found');
    }

    todo.markAsDone();
    todoListService.save();
    printerService.print([todo]);
  },
  remove(id) {
    const todo = todoListService.find(id);

    if (!todo) {
      throw new Error('Todo not found');
    }

    todoListService.remove(todo);
    todoListService.save();
    printerService.print([todo]);
  },
  help() {
    console.log(`
      node index.js get
      node index.js add text
      node index.js done id
      node index.js remove id
    `);
  }
}

const command = process.argv[2];
const action = actions[command.toLowerCase().trim()];

if (!action) {
  throw new Error('Unknown action');
}

action(...process.argv.slice(3, process.argv.length));
