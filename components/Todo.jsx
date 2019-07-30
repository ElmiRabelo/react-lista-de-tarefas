import React, { Component } from 'react';
import { render } from 'react-dom';

class Todo extends Component {
  handleClick = e => {
    this.props.deleteTodo(this.props.id);
  }
  render() {
    return (
      <div className="Todo">
        <button>Editar</button>
        <button onClick={this.handleClick}>X</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}

export default Todo;