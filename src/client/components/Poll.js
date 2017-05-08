import React from 'react';
import {Link} from 'react-router-dom';

const Poll = ({name, _id, choices=[]}) => (
    <Link to={_id} className="pollLink">
        <div className="pollBox">
            <h3 className="pollName">{name}</h3>
            <ul className="pollChoices">
                {choices.sort((a, b) => (a.votes - b.votes)).reverse().slice(0, 3).map((choice) => (
                    <li key={choice._id}><span  className="voteNumber">{choice.votes}</span>{choice.name}</li>
                ))}
            </ul>
        </div>
    </Link>
);

export default Poll;