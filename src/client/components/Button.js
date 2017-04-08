import React from 'react';

const Button = ({text = "Button", type = "button"}) => (
    <button type={type}>{text}</button>
);

export default Button;