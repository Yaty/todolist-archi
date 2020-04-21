require('dotenv').config();
const fs = require('fs')
const TodolistService = require('../../src/domain/service/todolist');
const TodoService = require('../../src/domain/service/todo');

describe('Todolist Service tests', () => {

    beforeAll(() => {
        fs.writeFileSync(process.env.TODOLIST_FILE_PATH, JSON.stringify([]));
    })

    it('should return empty todolist', () => {
        const expected = [];
        expect(TodolistService.get()).toStrictEqual(expected);
    });

    it('should find a todo in list', () => {
        const newTodo = TodoService.create('this is test todo', new Date());
        TodolistService.add(newTodo);
        TodolistService.save();
        expect(TodolistService.find(newTodo.id)).toStrictEqual(newTodo);
    });

    it('should add a todo to list', () => {
        const newTodo = TodoService.create('this is test todo', new Date());
        TodolistService.add(newTodo);
        TodolistService.save();
        expect(TodolistService.find(newTodo.id)).toStrictEqual(newTodo);
    });

    it('should remove a todo to list', () => {
        const newTodo = TodoService.create('this is test todo', new Date());
        TodolistService.add(newTodo);
        TodolistService.save();
        TodolistService.remove(newTodo);
        TodolistService.save();
        expect(TodolistService.find(newTodo.id)).toBe(undefined);
    });
});

