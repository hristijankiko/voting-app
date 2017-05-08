import React from 'react';

const RadioButton = ({_id, name, pollId, label, input}) => {
    return (
        <div className="radioButton">
            <input {...input} id={_id} name={pollId} type="radio" value={label} />
            <label htmlFor={_id}><span>{label}</span></label>
        </div>
    );
}

export default RadioButton;