import {REMOVE_TODO, RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions.js';
import merge from "lodash/merge";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newObject;
  let newState;
  switch(action.type) {
    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach ( todo => newState[todo.id] = todo);
      return newState;
    case RECEIVE_TODO:
      newObject = {};
      newObject[action.todo.id] = action.todo;
      return merge({}, state, newObject);
    case REMOVE_TODO:
      newState = merge({},state)
      delete newState[action.todo.id]
      return newState;
    default:
      return state;
  }
}

export default todosReducer;
