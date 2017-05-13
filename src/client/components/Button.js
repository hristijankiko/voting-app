import React from 'react';

const Button = ({text = "Button", type = "button", disabled = false}) => (
    <button type={type} disabled={disabled}>{text}</button>
);

export default Button;