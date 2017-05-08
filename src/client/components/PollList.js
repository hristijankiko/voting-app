import React from 'react';
import Poll from './Poll';

function getUserPolls(polls, createdBy) {
  console.log(createdBy);
  if(!createdBy) {
    return polls;
  }

  polls = polls.filter((poll) => {
    console.log(poll.createdBy);
    return poll.createdBy == createdBy;
  })

  console.log(polls);

  return polls;
}

const PollList = ({polls = [], createdBy}) => (
  <div className="pollListContainer">
    {getUserPolls(polls, createdBy).map((poll, index) => (
      <Poll key={poll._id} name={poll.name} _id={poll._id} choices={poll.choices} />
    ))}
  </div>
);

export default PollList;