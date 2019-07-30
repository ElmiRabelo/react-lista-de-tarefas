import React, { Component } from 'react';
import { render } from 'react-dom';

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {editing: false, value: this.props.task}
  }

  //responsavel por deletar uma tarefa
  handleClick = e => {
    this.props.deleteTodo(this.props.id);
  }

  //Atualiza o state para habilitar a edição do texto
  handleEdit = () => { this.setState({editing: true})}

  //Atualiza em tempo real o texto de input da edição
  handleChange = (e) => {
    this.setState( {value: e.target.value});
  }

  //Atualiza o valor de editing e faz com o texto editado seja renderizado em um li
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({value: this.state.value, editing: false});

  }

  render() {
    //Verificação para mostrar um input de edição da tarefa ou a tarefa na lista
    let taskEdit;
    if(this.state.editing) {
      taskEdit = (<form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type='submit' value='Confirmar' />
      </form>)
    } else {
      taskEdit = <li>{this.state.value}</li>
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