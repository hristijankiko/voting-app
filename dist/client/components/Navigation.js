'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function toggleNavigation() {
  nav.style.display = nav.style.display === 'none' ? 'inline-block' : 'none';
}

var Navigation = function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

    _this.state = {
      visibility: "none"
    };
    return _this;
  }

  _createClass(Navigation, [{
    key: 'toggleCollapse',
    value: function toggleCollapse() {
      this.setState(function (prevState) {
        return {
          visibility: prevState.visibility === 'none' ? 'inline-block' : 'none'
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navBar' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/", className: 'navbarHome' },
          'Voting-app'
        ),
        _react2.default.createElement(
          'button',
          { className: 'toggleButton', onClick: this.toggleCollapse.bind(this) },
          _react2.default.createElement('span', { className: 'bar' }),
          _react2.default.createElement('span', { className: 'bar' }),
          _react2.default.createElement('span', { className: 'bar' })
        ),
        _react2.default.createElement(
          'ul',
          { className: 'navLinks', style: { display: this.state.visibility } },
          !this.props.isAuthenticated && _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/login' },
              'Login'
            )
          ),
          !this.props.isAuthenticated && _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/register' },
              'Register'
            )
          ),
          this.props.isAuthenticated && _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/create' },
              'Create'
            )
          ),
          this.props.isAuthenticated && _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/profile' },
              this.props.username
            )
          ),
          this.props.isAuthenticated && _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/', onClick: this.props.onLogoutClick },
              'Logout'
            )
          )
        )
      );
    }
  }]);

  return Navigation;
}(_react2.default.Component);

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

exports.default = Navigation;