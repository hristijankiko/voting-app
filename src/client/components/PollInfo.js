import React from 'react';
import {Redirect} from 'react-router';
import DoughnutChart from './DoughnutChart';
import VoteFormContainer from '../containers/VoteFormContainer';

const PollInfo = ({_id, name, choices = [], authUser}) => (
    <div>
        {!_id && <Redirect to="/"/>}
        <h1 className="pollHeader">{name}</h1>
        <div className="pollInfoContent">
            <VoteFormContainer choices={choices} authUser={authUser} pollId={_id} authUser={authUser}/>
            <DoughnutChart _id={_id} choices={choices} width="300" height="300"/>
        </div>
    </div>
);

export default PollInfo;