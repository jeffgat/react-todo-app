import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from "./NewTodoForm";
import './TodoList.css'

export default class TodoList extends Component {
                 constructor(props) {
                   super(props);

                   this.state = {
                     todos: []
                   };
                   this.add = this.add.bind(this);
                   this.remove = this.remove.bind(this);
                   this.update = this.update.bind(this);
                   this.toggleCompleted = this.toggleCompleted.bind(this);
                 }

                 add(newTodo) {
                   this.setState({
                     todos: [...this.state.todos, newTodo]
                   });
                 }

                 remove(id) {
                    this.setState({
                        todos: this.state.todos.filter(todo => todo.id !== id)
                    })
                 }
                 update(id, updatedTodo) {
                    const updatedTodos = this.state.todos.map(t => {
                      if(t.id === id) {
                        return { ...t, todo: updatedTodo }
                      }
                      return t;
                    });
                    this.setState({ todos: updatedTodos })
                 }
                 toggleCompleted(id){
                   const updatedTodos = this.state.todos.map(t => {
                     if (t.id === id) {
                       return { ...t, completed: !t.completed }
                     }
                     return t;
                   });
                   this.setState({ todos: updatedTodos })
                 }

                 render() {
                   // render method
                   const todos = this.state.todos.map(item => (
                     <Todo
                       todo={item.todo}
                       id={item.id}
                       key={item.id}
                       completed={item.completed}
                       removeTodo={this.remove}
                       updateTodo={this.update}
                       toggleTodo={this.toggleCompleted}
                     />
                   ));
                   console.log(this.state.todos);
                   return (
                     <div className='TodoList'>
                       <h1>Todo List<span>A React Todo List App</span></h1>
                      <ul>{todos}</ul>
                       <NewTodoForm addTodo={this.add} />
                     </div>
                   );
                 }
               }
