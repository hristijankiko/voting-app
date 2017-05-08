import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {fetchPolls} from './actions';
import App from './components/App';
import CreatePollFormContainer from './containers/CreatePollFormContainer';
import NavigationContainer from './containers/NavigationContainer';
import LoginFormContainer from './containers/LoginFormContainer';
import RegisterFormContainer from './containers/RegisterFormContainer';
import PollListContainer from './containers/PollListContainer';
import PollInfoContainer from './containers/PollInfoContainer';
import ProfileContainer from './containers/ProfileContainer';
import rootReducer from './reducers';
import './css/style.sass';

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
        <NavigationContainer />
        <Switch>
          <Route exact path="/" component={PollListContainer} />
          <Route exact path="/login" component={LoginFormContainer} />
          <Route exact path="/register" component={RegisterFormContainer} />
          <Route exact path="/create" component={CreatePollFormContainer} />
          <Route exact path="/profile" component={ProfileContainer}/>
          <Route path="/:pollid" component={PollInfoContainer} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);