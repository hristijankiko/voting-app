import React from 'react';
import {Link} from 'react-router-dom';

const Poll = ({name, _id}) => (
    <Link to={_id}>
        <li className="list-group-item col-md-4">{name}</li>
    </Link>
);

export default Poll;