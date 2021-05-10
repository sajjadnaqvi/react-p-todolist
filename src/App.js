import './App.css';
import React from "react";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItem";

class App extends React.Component{

  state = {
    todos :[
      {
        text : "Buy Milk",
        completed: false
      },
      {
        text : "Buy Egg",
        completed:true
      }
    ]
  };

  // this function received value from Addtodo component save into the state
  addTodoToState = (text) =>{
    const newTodos = this.state.todos.concat({
      text: text
    });

    this.setState({
      todos:newTodos
    });
  };

  editTodoFromState = (index,newText)=>{
    const newTodo = this.state.todos.map((todo,i)=>{
      if(index === i){
        return {
          ...todo,
          text : newText
        }
      }
      return todo;
    });
    this.setState({
      todos:newTodo
    });
  };

  toggleComplete = (index) =>{
    const newTodos = this.state.todos.map((todo,i) =>{
      if(index === i)
      {
        return {
          ...todo,
          completed : !todo.completed
        };
      }

      return todo;
    } );
    this.setState({
      todo: newTodos
    });
  }

  deleteTodoFromState = index  =>
  {
    const newTodos = this.state.todos.filter((todo,i)=>{
      if(index == i)
      {
        return false;
      }
      return true;
    });
    this.setState({
      todos:newTodos
    });

  };

  render(){
    return(
      <div className="App">

        {this.state.todos.map((todo,index) =>{
          return (<TodoItem
           toggleComplete={this.toggleComplete}
           deleteTodoFromState ={this.deleteTodoFromState}
           editTodoFromState={this.editTodoFromState}
           todo={todo}
           index = {index}
            key={index}/>
          );
        })}
        <AddTodo addTodoToState={this.addTodoToState}/>

      </div>
    );
  }
}

export default App;
