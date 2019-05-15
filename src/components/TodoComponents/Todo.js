import React from 'react';

const Todo = (props) => {
    return(
        <div>
            <h3>Todo Title: {props.thestuff.task}</h3>
            <p>Completed: {props.thestuff.completed ? 'True' : 'False'}</p>
        </div>
        
        
    )
}

export default Todo;