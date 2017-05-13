'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _RadioButton = require('./RadioButton');

var _RadioButton2 = _interopRequireDefault(_RadioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VoteForm = function VoteForm(_ref) {
    var _ref$choices = _ref.choices,
        choices = _ref$choices === undefined ? [] : _ref$choices,
        handleSubmit = _ref.handleSubmit,
        authUser = _ref.authUser,
        onVoteSubmit = _ref.onVoteSubmit,
        pollId = _ref.pollId,
        _ref$isFetching = _ref.isFetching,
        isFetching = _ref$isFetching === undefined ? false : _ref$isFetching;
    return _react2.default.createElement(
        'form',
        { onSubmit: handleSubmit(onVoteSubmit), className: 'voteForm' },
        _react2.default.createElement(
            'fieldset',
            null,
            _react2.default.createElement(
                'legend',
                null,
                'Vote:'
            ),
            choices.map(function (choice, index) {
                return _react2.default.createElement(_reduxForm.Field, { key: choice._id, component: _RadioButton2.default, _id: choice._id, pollId: pollId, label: choice.name, id: choice._id, name: 'voteChoice', value: choice.name });
            })
        ),
        _react2.default.createElement(_Button2.default, { type: 'submit', text: 'vote', disabled: isFetching })
    );
};

VoteForm = (0, _reduxForm.reduxForm)({
    form: 'vote'
})(VoteForm);

exports.default = VoteForm;