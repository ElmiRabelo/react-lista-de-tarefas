import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {task: ''}
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.setState({task: ''});

  }

  render() {
    return (
      <div className='TodoForm'>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='task'>Nova Tarefa</label>
            <input type='text' onChange={this.handleChange} id="task" name="task" value={this.state.task} placeholder='Nova Tarefa'/>
          </div>
          <input type="submit" value="Adicionar" />
        </form>
      </div>
    )
  }
}

export default TodoForm;