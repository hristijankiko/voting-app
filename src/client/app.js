import React from 'react';
import {render} from 'react-dom';
<<<<<<< HEAD

class App extends React.Component {
    render() {
        return (<h1>Application componen</h1>);
    }
}

render(
    <App />,
    document.getElementById('root')
=======
import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'
import axios from 'axios';
import {createStore} from 'redux';
import App from './components/App';
import PollInfo from './components/PollInfo';
import PollList from './components/PollList';

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
      <IndexRoute component={PollList}></IndexRoute>
      <Route path="/:pollid" component={PollInfo}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
>>>>>>> 19298b0756991e03f30443f33193d091794bb672
);