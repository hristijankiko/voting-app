import React from 'react';
import {render} from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import App from './components/App';
import Navigation from './components/Navigation';
import LoginFormContainer from './containers/LoginFormContainer';
import RegisterFormContainer from './containers/RegisterFormContainer';
import PollListContainer from './containers/PollListContainer';
import PollInfoContainer from './containers/PollInfoContainer';
import rootReducer from './reducers';
import {fetchPolls} from './actions';

const loggerMiddleware = createLogger();

const store = createStore(rootReducer, applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
));

store.dispatch(fetchPolls("asd"));

render(
  <Provider store={store}>
    <Router>
      <div>
        <Navigation />
        <Route exact path="/" component={PollListContainer} />
        <Route exact path="/login" component={LoginFormContainer} />
        <Route exact path="/register" component={RegisterFormContainer} />
        <Route exact path="/:pollid" component={PollInfoContainer} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);