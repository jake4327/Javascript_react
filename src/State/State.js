import React, {useState} from 'react';
import ChildComponent from './ChildComponent';

function State(){
    let [answer, setAnswer] = useState("Yes");
    let [num, setNum] = useState(123);
    let [arr, setArr] = useState(["Hans","Jake"])
    return(
        <>
            <div>Is state importatnt to know? {answer}</div>
            <p>what is the number: {num}</p>
            <p>What is the arr: {arr}</p>
            <ChildComponent property={num}/>

        </>
    );
}

export default State;