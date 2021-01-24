import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem'
import todosData from './todosData'

class App extends React.Component {
  constructor(){
    super()
      this.state={
        todos:todosData
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id){
      this.setState(prevState=>{
        const updatedTodo= prevState.todos.map(el=>{
          console.log(prevState)
          if(el.id===id){
            console.log(el)
            return {
              ...el,
              completed: !el.completed
            }
          }
          return el
        })
        return {
          todos: updatedTodo
        }
      })
    }
  render(){
    const todoData = this.state.todos.map(todo => <TodoItem key={todo.id} todo={todo}
      handleChange={this.handleChange} />)
  
    return (
      <div className = 'todos'>
        <h1 className='header'> My Todo List </h1>
        {todoData}
  
      </div>
      
    );

  }
 
}

export default App;



// import React from "react"
// import TodoItem from "./components/TodoItem"
// import todosData from "./todosData"

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             todos: todosData
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//     handleChange(id) {
//         this.setState(prevState => {
//             const updatedTodos = prevState.todos.map(todo => {
//                 if (todo.id === id) {
//                     return {
//                         ...todo,
//                         completed: !todo.completed
//                     }
//                 }
//                 return todo
//             })
//             console.log(prevState.todos)
//             console.log(updatedTodos)
//             return {
//                 todos: updatedTodos
//             }
//         })
//     }
    
//     render() {
//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )    
//     }
// }

// export default App