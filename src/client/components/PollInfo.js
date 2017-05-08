import React from 'react';
import {Redirect} from 'react-router';
import DoughnutChart from './DoughnutChart';
import VoteFormContainer from '../containers/VoteFormContainer';
import ChoiceList from './ChoiceList';

const PollInfo = ({_id, name, choices = [], authUser}) => (
    <div>
        {!_id && <Redirect to="/"/>}
        <h1 className="pollHeader">{name}</h1>
        <div className="pollInfoContent">
            {authUser ? 
                <VoteFormContainer choices={choices} authUser={authUser} pollId={_id} authUser={authUser}/> : 
                <ChoiceList choices={choices} />
            }
            <DoughnutChart _id={_id} choices={choices} width="300" height="300"/>
        </div>
    </div>
);

export default PollInfo;