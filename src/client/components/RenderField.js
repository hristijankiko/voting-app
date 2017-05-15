import React from 'react';

const RenderField = ({ input, label, type, placeholder, meta: { touched, error} }) => (
  <div className="inputField">
    <div>
      <input {...input} type={type} placeholder={placeholder || label}/>
      {touched && ((error && <span className="formError">{error}</span>))}
    </div>
  </div>
)

export default RenderField;