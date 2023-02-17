import React from 'react';

export default function Todo({ todo, toggleTodo }) {

    function handleTodoClick(id) {
        toggleTodo(todo.id);
    }

    return (
        <>
            {/* <button className="flex-row card" onClick={handleTodoClick}> */}
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
            <label >{todo.name} (id={todo.id})</label>
            {/* </button> */}

        </>
    )
}


