import React from 'react';
import propTypes from 'prop-types'

function DogsCard(props){
    console.log(props);
    return(
        <>
            <div className="contacts">
                <div className="contact-card">
                    <h3>Name: {props.name}</h3>
                    <p>Phone: {props.phone}</p>     
                </div>
            </div>
        </>
    );
}

DogsCard.defaultProps = {
    phone: `no phone number`,
    name: `No name`
}

DogsCard.propTypes = {
    phone: propTypes.number,
    name: propTypes.string.isRequired
}

export default DogsCard;

function addNum(no1, no2){
    return no1+no2;
}


    // <div className="contacts">
    //     <div className="contact-card">
    //         <h3>Jake</h3>
    //         <p>Phone +44 114 496 0879</p>     
    //     </div>
    //     <div className="contact-card">
    //         <h3>Dick</h3>
    //         <p>Phone 0114 496 0879 </p>     
    //     </div>
    //     <div className="contact-card">
    //         <h3>Harry</h3>
    //         <p>Phone 44(0)114 496 087</p>     
    //     </div>
    //     <div className="contact-card">
    //         <h3>Tom</h3>
    //         <p>Phone 44 113 496 0109</p>     
    //     </div>
    // </div>
