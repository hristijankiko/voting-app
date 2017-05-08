import React from 'react';

const ChoiceList = ({choices = []}) => (
    <div className="pollChoices">
        <h2>Votes</h2>
        <ul>
            {choices.map((choice) => (
                <li key={choice._id}><span  className="voteNumber">{choice.votes}</span>{choice.name}</li>
            ))}
        </ul>
    </div>
);

export default ChoiceList;