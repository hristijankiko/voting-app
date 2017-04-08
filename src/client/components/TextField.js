import React from 'react'

const TextField = ({type, name, value, onChange, label}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <input type={type} id={name} name={name} value={value} onChange={onChange} />
    </div>
);

export default TextField;