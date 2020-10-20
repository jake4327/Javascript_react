import React from 'react';
import propTypes from 'prop-types'

function ExceriseCard(props){
    console.log(props);
    return(
        <>
            <div className="excerises">
                <div className="excerise">
                    <h3>Name: {props.name}</h3>
                    <p>Description: {props.description}</p> 
                    <p>task number: {props.task_no}</p>   
                </div>
            </div>
        </>
    );
}

ExceriseCard.defaultProps = {
    name: `No excersie`,
    description: `???`,
    task_no: 0
}

ExceriseCard.propTypes = {
    phone: propTypes.number,
    name: propTypes.string.isRequired
}

export default ExceriseCard;

