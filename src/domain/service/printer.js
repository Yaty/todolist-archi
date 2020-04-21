const State = require('../business/state');
const moment = require('moment');

function getAge(date) {
  return moment(date).fromNow(true);
}

module.exports = {
  print(todolist) {
    const sortedTodoList = todolist.sort((a, b) => b.date - a.date);

    for (const todo of sortedTodoList) {
      console.log(`(${todo.id}) [${getAge(todo.date)}] ${todo.text} ${todo.state === State.DONE ? '[x]' : ''}`);
    }
  }
}
