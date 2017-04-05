import React from 'react';

const PollInfo = ({id, name, choices = []}) => (
    <div>
        <h1>{name}</h1>
        <ul>
            {choices.map(choice => (
                <li key={choice._id}>{choice.name}: {choice.votes}</li>
            ))}
        </ul>
    </div>
);

export default PollInfo;