import React from 'react';
import PollList from '../components/PollList';

const Profile = ({createdBy, polls}) => (
    <div>
        <h1> Polls created by you</h1>
        <PollList polls={polls} createdBy={createdBy} />
    </div>
);

export default Profile;