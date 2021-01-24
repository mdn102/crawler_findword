import React from 'react'

function TodoItem(props){ 
    console.log(props.todo)
    const strikeThrough = {
        fontStyle:'italic',
        color: 'gray',
        textDecoration: 'line-through'

    }
    return(
        <div className='todo-item'>
        <input 
            type='checkbox' 
            checked={props.todo.completed} 
            onChange={()=>props.handleChange(props.todo.id)}/>
            <p style=
                {props.todo.completed? strikeThrough : null}>
                {props.todo.text}
             </p>
      </div>
    )

}


export default TodoItem

