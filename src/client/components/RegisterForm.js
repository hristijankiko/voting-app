import React from 'react';
import {Field, reduxForm} from 'redux-form'
import isEmail from 'validator/lib/isEmail';
import RenderField from './RenderField';
import Button from './Button';

const validate = values => {
    const errors = {}

    if(!values.email) {
        errors.email = "Email is required";
    } else if(!isEmail(values.email)) {
        errors.email = "Invalid email";
    }

    if(!values.username) {
        errors.username = "Username is required";
    } else if (values.username.length < 6) {
        errors.username = "Username must be at least 5 characters";
    }

    if(!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters"
    }

    return errors;
}

let RegisterForm = ({handleSubmit, onSubmit, errors = {}, submitting }) => (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Register</h2>
                
        <Field name="username" component={RenderField} type="text" label="Username" />

        <Field name="email" component={RenderField} type="email" label="Email"/>

        <Field name="password" component={RenderField} type="password" label="Password"/>

        <Button type="Submit" text="Register" disabled={submitting} />
        
    </form>
);

RegisterForm = reduxForm({
    form: 'register',
    validate
})(RegisterForm);

export default RegisterForm;