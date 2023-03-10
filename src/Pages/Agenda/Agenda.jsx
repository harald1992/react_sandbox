import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList/TodoList';

const LOCAL_STORAGE_KEY = 'todoApp.todos';

export default function Agenda() {

    const [todos, setTodos] = useState([]);
    const todoNameRef = useRef('')

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (storedTodos.length) {
            setTodos(storedTodos);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos])

    function toggleTodo(id) {
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodos);
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value;
        if (!name) {
            todoNameRef.current.value = null;
            return;
        }

        setTodos(prevTodos => {
            return [...prevTodos, { id: Math.round(Math.random() * 1000), name: name, complete: false }];
        })

    }

    function handleClearTodo(e) {
        setTodos([]);
    }

    function getTodoNumberLeft() {
        return todos.map(todo => !todo.complete).length;
    }

    return (
        <>
            <h2>Agenda</h2>

            <TodoList todos={todos} toggleTodo={toggleTodo}></TodoList>

            <div className="flex-row space-between gap-4">
                <input type="text" ref={todoNameRef} />

                <button className="btn" onClick={handleAddTodo}>Add Todo</button>
                <button className="btn" onClick={handleClearTodo}>Clear Completed Todos</button>

            </div>

            <p>{getTodoNumberLeft()} left to do</p>
        </>
    )
}