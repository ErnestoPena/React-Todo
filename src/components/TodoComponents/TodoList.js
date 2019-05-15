// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            <h2>Todo List</h2>
            {props.todos.map(todo => {
                return<Todo key={todo.id} thestuff={todo}/>
            })

            }
            
        </div>
    );
};

export default TodoList;