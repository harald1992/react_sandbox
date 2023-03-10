import React from 'react';
import Todo from '../Todo/Todo';

export default function TodoList({ todos, toggleTodo }) {
    return (
        <>
            {todos.map(todo => {
                return (<div className="margin-bottom-8">
                    <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} ></Todo>
                </div>
                )
            })}


        </>
    )
}
