import React, { Component } from 'react';
import { render } from 'react-dom';
import './Todo.css';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {editing: false, task: this.props.task}
  }

  //responsavel por deletar uma tarefa
  handleClick = e => {
    this.props.deleteTodo(this.props.id);
  }

  //Atualiza o state para habilitar a edição do texto
  handleEdit = () => { this.setState({editing: true})}

  //Atualiza em tempo real o texto de input da edição
  handleChange = (e) => {
    this.setState( {[e.target.name]: e.target.value});
  }

  //Atualiza o valor de editing e faz com o texto editado seja renderizado em um li
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({editing: false});

  }

  handleToggle = () => {
    this.props.toggleDone(this.props.id);
  }

  render() {
    //Verificação para mostrar um input de edição da tarefa ou a tarefa na lista
    //Se estiver editando, handleChange será responsavel por atualizar o setState
    //handleSubmit será responsavel por elevar os novos valores para TaskList e setar editing para falso novamente.
    let taskEdit;
    if(this.state.editing) {
      taskEdit = (
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.task} name='task' onChange={this.handleChange} />
        <input type='submit' value='Confirmar' />
      </form>
      )
    } else {
      //Verifica se a done é true para adicionar uma classe que é estilizada fornecendo o feedback de uma tarefa está concluida
      taskEdit = <li onClick={this.handleToggle} className={this.props.done ? 'Todo-done' : ''}> {this.state.task} </li>
    }

    return (
      <div className="Todo">
        <button onClick={this.handleEdit}>Editar</button>
        <button onClick={this.handleClick}>X</button>
        {taskEdit}
      </div>
    );
  }
}

export default Todo;