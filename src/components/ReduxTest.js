import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeAnyad } from '../store/test/action';
import { selectAnyad, selectMyFirstState } from '../store/test/selectors';
import sad from '../assets/imgs/sad.png';
import happy from '../assets/imgs/happy.png';

export default function ReduxTest() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    
    const data = useSelector(selectAnyad);
    const myPreciusData = useSelector(selectMyFirstState);
    
    console.log(data);
    return (
        <div>
            <h1>{data}</h1>
            <h2>{myPreciusData}</h2>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
            <button onClick={()=>{dispatch(changeAnyad(input))}}>Change</button>
            
        </div>
    )
}
