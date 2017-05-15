import React from 'react';
import {Redirect} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import Button from './Button';
import RenderField from './RenderField';
import ErrorMessageContainer from '../containers/ErrorMessageContainer';

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

let CreatePollForm = ({handleSubmit, onSubmit, err = {}, isFetching = false, isAuthenticated}) => (
    <div>
        {!isAuthenticated && <Redirect to="/login" />}
        {err.message && <ErrorMessageContainer message={err.message} />}

        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Create Poll</h2>
            
            <Field name="name" component={RenderField} type="name" label="Name"/>
            <Field name="choices" component={RenderField} type="choices" label="Choices" placeholder="Choice1, Choice2, Choice3..."/>
            <Button type="Submit" text="Create" disabled={isFetching} />
        </form>
    </div>
);

CreatePollForm = reduxForm({
    form: 'createPoll',
    validate
})(CreatePollForm);

export default CreatePollForm;