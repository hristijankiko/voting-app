import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import axios from 'axios';
import {createStore} from 'redux';
import App from './components/App';
import PollInfo from './components/PollInfo';

const initialState = {};

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([ action.text ])
    default:
      return state
  }
}

const store = createStore(todos, {});
store.subscribe(function(state){
  console.log(state);
});

axios.get('api/polls')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

render(
  <Router history={browserHistory}> 
    <Route path="/" component={App}>
      <IndexRoute component={PollInfo}></IndexRoute>
      <Route path="asd" component={PollInfo}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);