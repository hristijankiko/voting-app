import React from 'react';

const RenderField = ({ input, label, type, meta: { touched, error} }) => (
  <div className="inputField">
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && ((error && <span className="formError">{error}</span>))}
    </div>
  </div>
)

export default RenderField;