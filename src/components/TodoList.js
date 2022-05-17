import React from "react";
import Todo from './Todo';

function TodoList({todos,setTodos,filteredtodos}) {
    // console.log(todos);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredtodos.map(todo => (
                    <Todo 
                    todos={todos}
                    setTodos={setTodos}
                    key={todo.id} 
                    todo={todo}
                    text={todo.text} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList;