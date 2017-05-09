import React from 'react';

class TodoDetailView extends React.Component {
  constructor(props){
    super(props)

  }

  handleDelete(e){
    e.preventDefault();
    this.props.removeTodo(this.props.todo);
  }


  render(){
    return (
      <div>
        <p>{this.props.todo.body}</p>
        <button onClick={this.handleDelete.bind(this)}>X</button>

      </div>
    )
  }
}

export default TodoDetailView;
