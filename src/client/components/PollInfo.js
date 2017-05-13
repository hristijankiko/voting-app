import React from 'react';
import {Redirect} from 'react-router';
import DoughnutChart from './DoughnutChart';
import VoteFormContainer from '../containers/VoteFormContainer';
import ChoiceList from './ChoiceList';

function userHasVoted(usersVoted, authUser) {

    if((usersVoted && usersVoted.length === 0) || !authUser) {
        return false;
    }

    for(let i = 0; i < usersVoted.length; i++) {
        if(usersVoted[i] === authUser) {
            return true;
        }
    }
    return false;
}

const PollInfo = ({_id, name, choices = [], authUser, usersVoted = []}) => (
    <div>
        {!_id && <Redirect to="/"/>}
        <h1 className="pollHeader">{name}</h1>
        <div className="pollInfoContent">
            {console.log(userHasVoted())}
            {authUser && !userHasVoted(usersVoted, authUser) ? 
                <VoteFormContainer choices={choices} authUser={authUser} pollId={_id} authUser={authUser}/> : 
                <ChoiceList choices={choices} />
            }
            <DoughnutChart _id={_id} choices={choices} width="300" height="300"/>
        </div>
    </div>
);

export default PollInfo;