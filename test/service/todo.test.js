const TodoService = require('../../src/domain/service/todo');
const states = require('../../src/domain/business/state');

describe('Todo Service tests', () => {
    it('should create a todo', () => {
        const date = new Date();
        const text = 'this is test todo'

        const newTodo = TodoService.create(text, date);

        expect(newTodo.text).toStrictEqual(text);
        expect(newTodo.date).toStrictEqual(date);
        expect(newTodo.state).toStrictEqual(states.ONGOING);
    });
});

