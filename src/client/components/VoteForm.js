import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Button from './Button';
import RadioButton from './RadioButton';

let VoteForm = ({choices = [], handleSubmit, authUser, onVoteSubmit, pollId, isFetching = false}) => (
    <form onSubmit={handleSubmit(onVoteSubmit)} className="voteForm">
        <fieldset>
            <legend>Vote:</legend>
            {choices.map((choice, index) => (
                <Field key={choice._id} component={RadioButton} _id={choice._id} pollId={pollId} label={choice.name} id={choice._id} name="voteChoice" value={choice.name}/>
            ))}
        </fieldset>
        <Button type="submit" text="vote" disabled={isFetching}/>
        </form>
);

VoteForm = reduxForm({
    form: 'vote'
})(VoteForm);

export default VoteForm;