import React from 'react';
import {Link} from 'react-router-dom';

function toggleNavigation() {
  nav.style.display = nav.style.display === 'none' ? 'inline-block' : 'none';
}

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: "none"
    }
  }

  toggleCollapse(){
    this.setState((prevState) => {
      return {
        visibility: prevState.visibility === 'none' ? 'inline-block' : 'none'
      }
    })
  }

  render() { 
    return (
    <nav className="navBar">
      <Link to={"/"} className="navbarHome">Voting-app</Link>
      <button className="toggleButton" onClick={this.toggleCollapse.bind(this)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    <ul className="navLinks" style={{display: this.state.visibility}}>
        {!this.props.isAuthenticated && <li><Link to="/login">Login</Link></li>}
        {!this.props.isAuthenticated && <li><Link to="/register">Register</Link></li>}
        {this.props.isAuthenticated && <li><Link to="/create">Create</Link></li>}
        {this.props.isAuthenticated && <li><Link to="/profile">{this.props.username}</Link></li>}
        {this.props.isAuthenticated && <li><Link to="/" onClick={this.props.onLogoutClick}>Logout</Link></li>}
      </ul>
    </nav>
    )
  }
}

/*const Navigation = ({username = "Guest", isAuthenticated = false, onLogoutClick}) => (
  <nav className="navBar">
    <Link to={"/"} className="navbarHome">Voting-app</Link>
    <button className="toggleButton">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </button>
    <ul className="navLinks" id="collpase" onClick={toggleNavigation()}>
      <li>Log in</li>
      <li>Register</li>
    </ul>
  </nav>*/
  /*<nav className="navbar navbar-default">
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
    </nav>*/
// );

export default Navigation;