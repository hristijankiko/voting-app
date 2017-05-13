import React from 'react';
import PollList from '../components/PollList';
import {Redirect} from 'react-router-dom';

const Profile = ({createdBy, polls, isAuthenticated}) => (
    <div>
        {!isAuthenticated && <Redirect to="/" />}
        <h1> Polls created by you</h1>
        <PollList polls={polls} createdBy={createdBy} />
    </div>
);

export default Profile;