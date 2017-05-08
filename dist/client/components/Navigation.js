'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation(_ref) {
  var _ref$username = _ref.username,
      username = _ref$username === undefined ? "Guest" : _ref$username,
      _ref$isAuthenticated = _ref.isAuthenticated,
      isAuthenticated = _ref$isAuthenticated === undefined ? false : _ref$isAuthenticated,
      onLogoutClick = _ref.onLogoutClick;
  return _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-default' },
    _react2.default.createElement(
      'div',
      { className: 'container-fluid' },
      _react2.default.createElement(
        'div',
        { className: 'navbar-header' },
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#bs-example-navbar-collapse-1', 'aria-expanded': 'false' },
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Toggle navigation'
          ),
          _react2.default.createElement('span', { className: 'icon-bar' }),
          _react2.default.createElement('span', { className: 'icon-bar' }),
          _react2.default.createElement('span', { className: 'icon-bar' })
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: "/", className: 'navbar-brand' },
          'Voting-app'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'collapse navbar-collapse', id: 'bs-example-navbar-collapse-1' },
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav navbar-right' },
          console.log(isAuthenticated),
          !isAuthenticated && _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/register" },
              'Register'
            )
          ),
          !isAuthenticated && _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/login" },
              'Login'
            )
          ),
          isAuthenticated && _react2.default.createElement(
            'li',
            { onClick: onLogoutClick },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/" },
              'Logout'
            )
          ),
          isAuthenticated && _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/profile" },
              username
            )
          ),
          isAuthenticated && _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: "/create" },
              'Create'
            )
          )
        )
      )
    )
  );
};

exports.default = Navigation;