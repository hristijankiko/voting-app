import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Button from './Button';

let LoginForm = ({handleSubmit, onSubmit, errors = {}}) => (
    
    <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Login</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <label htmlFor="username">Username:</label>
        <Field name="username" component="input" type="text" />

        <label htmlFor="password">Password:</label>
        <Field name="password" component="input" type="password" />

        <Button type="submit" text="Login" />
    </form>
);

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginForm;