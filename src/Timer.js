import React from 'react';
import './App'
import { useTimer } from 'react-timer-hook';

function Timer({ expiryTimestamp }) {
  
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp });
 
  return (
    <div style={{textAlign: 'center'}}>
     
      <h1>Temporizador</h1>
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>

      </div>
    </div>
  );
}

export default  Timer;
/**<p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 40 second timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 40);
        restart(time)
      }}>Restart</button> */