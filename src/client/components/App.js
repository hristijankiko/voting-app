import React from 'react';
import {Link} from 'react-router';
import Navigation from './Navigation';

const App = ({children}) => (
  <div>
  <Navigation />
  <Link to={`/asd`}>PollInfo</Link>
  {children}
  </div>
);

export default App;