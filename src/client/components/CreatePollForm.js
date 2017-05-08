import React from 'react';
import {Redirect} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import Button from './Button';
import RenderField from './RenderField';

const validate = values => {
    const errors = {}

    if(!values.name) {
        errors.name = "Name is required";
    } else if (values.name.length < 6) {
        errors.name = "Name must be at least 6 characters";
    }
    
    if(!values.choices) {
        errors.choices = "Choices are required";
    } else if (values.choices.length < 6) {
        errors.choices = "Choice must be at least 6 characters";
    }

    return errors;
}

let CreatePollForm = ({handleSubmit, onSubmit, errors = {}, submitting, isAuthenticated}) => (

    <form onSubmit={handleSubmit(onSubmit)}>
        {console.log(isAuthenticated)}
        {!isAuthenticated && <Redirect to="/login" />}
        <h2>Create Poll</h2>
        
        <Field name="name" component={RenderField} type="name" label="Name"/>
        <Field name="choices" component={RenderField} type="choices" label="Choices"/>

        <Button type="Submit" text="Create" disabled={submitting} />
    </form>
);

CreatePollForm = reduxForm({
    form: 'createPoll',
    validate
})(CreatePollForm);

export default CreatePollForm;