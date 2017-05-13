import React from 'react';

const ErrorMessage = ({message, onClose}) => (
    <div className="errorMessage">
        <h3>{message}</h3>
        <button type="button" onClick={onClose}>&times;</button>
    </div>
);

export default ErrorMessage;