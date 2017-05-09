import React from 'react';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = { id: "", title: "", body: "" , done: false};
    this.receiveTodo = props.action.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const unique_id = new Date().getTime();
    this.setState({id: unique_id});
    this.receiveTodo(this.state);
  }

  updateTitle(e) {
    const title = e.target.value;
    this.setState({title});
  }

  updateBody(e) {
    const body = e.target.value;
    this.setState({body});
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Title
        <input type='text' value={this.state.title} onChange={this.updateTitle.bind(this)}/>
        </label>

        <label>Body
          <input type='text' value={this.state.body} onChange={this.updateBody.bind(this)}/>
        </label>

        <input type='submit' value="Submit" />

      </form>
    );
  }

}

export default TodoForm;
