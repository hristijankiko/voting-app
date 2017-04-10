import React from 'react';
import {Field, reduxForm} from 'redux-form'
import Button from './Button';

let RegisterForm = ({handleSubmit, onSubmit, errors = {} }) => (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}
        
        <label htmlFor="username">Username:</label>
        <Field name="username" component="input" type="text" />

        <label htmlFor="password">Password:</label>
        <Field name="password" component="input" type="password"/>

         <Button type="Submit" text="Register" />
        
    </form>
);

RegisterForm = reduxForm({
    form: 'register'
})(RegisterForm);

export default RegisterForm;