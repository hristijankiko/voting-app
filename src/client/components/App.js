import React from 'react';
import {Link} from 'react-router';
import Navigation from './Navigation';

const App = () => (
  <div>
  <Navigation />
  <Link to={`/asd`}>PollInfo</Link>
  </div>
);

export default App;