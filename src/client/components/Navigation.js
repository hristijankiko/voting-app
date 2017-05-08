import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = ({username = "Guest", isAuthenticated = false, onLogoutClick}) => (
  <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to={"/"} className="navbar-brand">Voting-app</Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            {console.log(isAuthenticated)}
            {!isAuthenticated && <li><Link to={"/register"}>Register</Link></li>}
            {!isAuthenticated && <li><Link to={"/login"}>Login</Link></li>}
            {isAuthenticated && <li onClick={onLogoutClick}><Link to={"/"}>Logout</Link></li>}
            {isAuthenticated && <li><Link to={"/profile"}>{username}</Link></li>}
            {isAuthenticated && <li><Link to={"/create"}>Create</Link></li>}
          </ul>
        </div>
      </div>
    </nav>
);

export default Navigation;