const State = require('./state');
const shortid = require('shortid');

class Todo {
  constructor(text, date) {
    this.id = shortid();
    this.text = text;
    this.date = date;
    this.state = State.ONGOING;
  }

  markAsDone() {
    this.state = State.DONE;
  }
}

module.exports = Todo;
