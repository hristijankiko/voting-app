import React from 'react';
import DoughnutChart from './DoughnutChart';

const PollInfo = ({_id, name, choices = []}) => (
    <div>
        <h1>{name}</h1>
        <ul>
            {choices.map(choice => (
                <li key={choice._id}>{choice.name}: {choice.votes}</li>
            ))}
        </ul>
        <DoughnutChart _id={_id} choices={choices} width="300" height="300"/>
    </div>
);

export default PollInfo;