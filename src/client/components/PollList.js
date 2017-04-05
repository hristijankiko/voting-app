import React from 'react';
import Poll from './Poll';

const PollList = ({polls = []}) => (
  <ul className="list-group">
    {polls.map((poll, index) => (
      <Poll key={poll._id} name={poll.name} _id={poll._id} />
    ))}
  </ul>
);

export default PollList;