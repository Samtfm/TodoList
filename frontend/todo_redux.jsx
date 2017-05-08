import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import allTodos from './reducers/selectors.js';
import Root from './components/root.jsx';

const store = configureStore();
window.store = store;
window.allTodos = allTodos;


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
	  <Root store={store}/>, // app inside the provider
	  document.getElementById('content')
  )
});
