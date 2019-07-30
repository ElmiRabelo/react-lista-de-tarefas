import React, { Component } from 'react';
import { render } from 'react-dom';
import Todo from './Todo';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {todos: [{task: 'Fazer comida'}, {task: 'Terminar de Estudar'}]}
  }

  //Reponsavel por criar uma nova todo utilizando o form
  create = todo => {
    //Criada key unica para cada Todo e adicionando em seguida para array em State
    const newTodo = {...todo, id: uuid()};
    this.setState(state => ({
      todos: [...state.todos, newTodo]
    }))
  }

  //Reponsavel por deletar uma todo
  delete = id => {
    let filterTodos = this.state.todos.filter( todo => todo.id !== id);
    this.setState({todos: filterTodos});
  }

  render() {
    //Para cada todo no array vai ser criado um novo component com Todo
    const renderTodos = this.state.todos.map(todo => (
      <Todo task={todo.task} key={todo.id} id={todo.id} deleteTodo={this.delete}/>
    ));
    return (
      <div className='TodoList'>
        <h1>Lista de Tarefas </h1>
        <ul>
          {renderTodos}
        </ul>
        <TodoForm createTodo={this.create}/>
      </div>
    );
  }
}

export default TodoList;