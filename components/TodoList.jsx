import React, { Component } from 'react';
import { render } from 'react-dom';
import Todo from './Todo';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {todos: []}
  }

  //Reponsavel por criar uma nova todo utilizando o form e atualizar no state
  create = todo => {
    //Criada key unica para cada Todo e adicionando em seguida para array em State
    const newTodo = {...todo, id: uuid(), done: false};
    this.setState(state => ({
      todos: [...state.todos, newTodo]
    }))
  }

  //Reponsavel por deletar uma todo e atualizar no state
  delete = id => {
    this.setState({todos: this.state.todos.filter( todo => todo.id !== id)});
  }

  //Atualiza a todos editadas no state de TodoList com os novos valores.
  update = (id, newTask) => {
    const updatedTodos = this.state.todos.map( todo => {
      if(todo.id === id) {
        return {...todo, task: newTask};
      }
      return todo;
    });
    this.setState( {todos: updatedTodos} );
  }


  //Modifica a todo para completa ou para não completa e atualiza no state.
  toggleDone = (id) => {
    const doneTodos = this.state.todos.map( todo => {
      if(todo.id === id) {
        return {...todo, done: !todo.done};
      }
      return todo;
    });
    this.setState( {todos: doneTodos} );
  }

  render() {
    //Para cada todo no array vai ser criado um novo component com Todo
    const renderTodos = this.state.todos.map(todo => (
      <Todo
        task={todo.task}
        key={todo.id}
        id={todo.id}
        done={todo.done}
        deleteTodo={this.delete}
        updateTodo={this.update}
        toggleDone={this.toggleDone}
      />
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