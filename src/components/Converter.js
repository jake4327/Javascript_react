import React from 'react';

const Convert = () => {
    const FirstName = "Jake";
    const LastName = "Stone";
    let timeOfDay = "";
    let AP_M = "";
    const date = new Date();
    let time = (date.getHours())
    if(time > 0 && time < 12){
        timeOfDay = "Morning";
        AP_M = "AM";
    }else if(time >= 12 && time < 16){
        timeOfDay = "Afternoon";
        AP_M = "PM"
    }else if(time >= 16 && time < 20){
        timeOfDay = "Evening";
        AP_M = "PM"
    }else{
        timeOfDay = "Night"
        AP_M = "PM"
    }

    return(
        <div>
            <h1>hello {`${FirstName} ${LastName}`}</h1>
            <p>{`Good  ${timeOfDay}, its just gone, ${date.getHours()}:${date.getMinutes()} ${AP_M}.
                 You're here with Jake on React FM`} </p>
        </div>
    )
}

export default Convert;