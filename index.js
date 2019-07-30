import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoList from './components/TodoList';
import './style.css';

class App extends Component {

  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
