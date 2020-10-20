import React from 'react';
import ExerciseCard from './ExceriseCard'

const exercise = {
    "name": "Props from an object",
    "description": "comes from an obj", 
    "task_no": 1
}

function Excersie(){
    return(
        <>
        <ExerciseCard 
        name="Props from an object" 
        description="comes from an obj" 
        task_no="1"
        />
        <ExerciseCard 
        name="Props exercise" 
        description="Make p tag" 
        task_no="2"
        />
        <ExerciseCard 

        />
        </>
    );
}

export default Excersie;