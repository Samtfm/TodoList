const allTodos = (state) => {
  let arr_ids = Object.keys(state.todos)
  let arr_todos = arr_ids.map( (id) => state.todos[id] )
  return arr_todos
}



export default allTodos;
