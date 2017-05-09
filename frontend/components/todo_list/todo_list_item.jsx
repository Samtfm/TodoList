import React from 'react';
import TodoDetailViewContainer from './todo_detail_view_container';
import merge from 'lodash/merge'
class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    this.state = merge({detail: false}, this.props.todo);
    // this.setState({detail: false})
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

  showDetail(e){
    e.preventDefault();
    this.setState({detail: !this.state.detail})
  }

  render() {
    let detailView = "";
    if (this.state.detail) {
      detailView = <TodoDetailViewContainer todo={this.state} />
    }
    return (
      <li onClick={this.showDetail.bind(this)}>{this.props.todo.title}
        <button onClick={this.flipDone.bind(this)}>{this.state.done ? "UNFINISHED" : "COMPLETED"}</button>
        {detailView}

      </li>

    )
  }
}




export default TodoListItem;
