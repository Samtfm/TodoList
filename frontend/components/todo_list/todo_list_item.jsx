import React from 'react';

class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.todo
  }

  handleDelete(e){
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  flipDone(e){
    e.preventDefault();
    const done = (this.state.done) ? false : true;
    this.setState({done})
    this.props.receiveTodo(this.state)
  }

  render() {
    return (
      <li>{this.props.todo.title}
        <button onClick={this.handleDelete.bind(this)}>X</button>
        <button onClick={this.flipDone.bind(this)}>{this.state.done ? "UNFINISHED" : "COMPLETED"}</button>
      </li>

    )
  }
}




export default TodoListItem;
