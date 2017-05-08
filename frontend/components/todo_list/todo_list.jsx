import React from 'react';
import TodoListItem from './todo_list_item'
const TodoList = (props) => (
  <ul>
  { props.todos.map(todo => <TodoListItem key={todo.id} todo={todo} />) }
  </ul>
)


export default TodoList;
