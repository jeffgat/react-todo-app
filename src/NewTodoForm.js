import React, { Component } from 'react'
import uuid from 'uuid/v4'
import './NewTodoForm.css'

export default class NewTodoForm extends Component {
                 constructor(props) {
                   super(props);

                   this.state = {
                     todo: ""
                   };
                   this.handleChange = this.handleChange.bind(this);
                   this.handleSubmit = this.handleSubmit.bind(this);
                 }

                 handleChange(evt) {
                    this.setState({ [evt.target.name]: [evt.target.value] });
                 }
                 handleSubmit(evt) {
                    evt.preventDefault()

                    // the todo function goes here
                    const newTodo = {...this.state, id: uuid(), completed: false}
                    this.props.addTodo(newTodo)
                    // reset state
                    this.setState({
                        todo: ""
                    })
                 }

                 render() {
                   return (
                     <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                       <label htmlFor="todo">New Todo</label>
                       <input
                         type="text"
                         placeholder="New Todo"
                         name="todo"
                         id="todo"
                         value={this.state.todo}
                         onChange={this.handleChange}
                       />
                       <button>ADD TODO</button>
                     </form>
                   );
                 }
               }
