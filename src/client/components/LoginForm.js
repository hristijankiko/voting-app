import React from 'react';
import {Redirect} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import isEmail from 'validator/lib/isEmail';
import Button from './Button';
import RenderField from './RenderField';

const validate = values => {
    const errors = {}

    if(!values.email) {
        errors.email = "Email is required";
    } else if(!isEmail(values.email)) {
        errors.email = "Invalid email";
    }

    if(!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters"
    }

    return errors;
}

let LoginForm = ({handleSubmit, onSubmit, errors = {}, submitting, isAuthenticated}) => (
    <form onSubmit={handleSubmit(onSubmit)}>
        {isAuthenticated && <Redirect to="/" />}
        <h2>Login</h2>

        <Field name="email" component={RenderField} type="email" label="Email"/>
        <Field name="password" component={RenderField} type="password" label="Password"/>

        <Button type="Submit" text="Login" disabled={submitting} />
    </form>
);

LoginForm = reduxForm({
    form: 'login',
    validate
})(LoginForm);

export default LoginForm;