import React from 'react';
import DogsCard from './DogCard'

const dog_one = {
    name: "Harry",
    phone: "0114 496 0879" 
}

function Dogs(){
    return(
        <>
        <DogsCard 
        name="Jake" 
        phone="hello" 
        />
        <DogsCard 
        name={dog_one.name}
        phone={dog_one.phone}
        />
        </>
    );
}

export default Dogs;