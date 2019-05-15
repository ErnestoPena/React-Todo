import React from 'react'

const TodoForm = props => {
    return (
        <div>
            <form onSubmit={props.addTodo}>
                <input onChange={props.onInputChange} type="text" name="task" placeholder="Add a task"/>

                <button onClick={props.addTodo}>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}

export default TodoForm;