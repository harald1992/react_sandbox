import React from 'react';

export default function Todo({ todo, toggleTodo }) {

    function handleTodoClick(id) {
        toggleTodo(todo.id);
    }

    return (
        <>
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
            <label onClick={handleTodoClick}>{todo.name} (id={todo.id})</label>

        </>
    )
}
