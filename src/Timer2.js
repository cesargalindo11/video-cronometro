import React from 'react'
import { useState, useEffect } from 'react';

const Timer2 = (props) => {
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    setMinutes('0');
                    setSeconds('10');
                    clearInterval(myInterval)
                } else {
                    setMinutes('0');
                    setSeconds('10');
                   
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div style={{textAlign: 'center'}}>
        { minutes === 0 && seconds === 0
            ? null
            : <h1 style={{fontSize: '100px'}}> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
        </div>
    )
}

export default Timer2;