import React from 'react'
import Video from './Video'

import 'bootstrap/dist/css/bootstrap.css'






import { useRef, useState } from 'react';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import './App.css';



const App = ()=> {

  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null)

  //button start rutina
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleStart = () => {
    //start button logic here
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(()=>{
      setTimer((timer) => timer+1)
    }, 1000)
  }
  const handlePause = () => {
    //Puase button logic here
    clearInterval(countRef.current)
    setIsPaused(false)
  }
  const handleResume = () => {
    //Resume button logic here
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer+1)
    }, 1000)
  }
  const handleReset = () => {
    //Reset butoon logic
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const url='https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/fitnes.mp4?alt=media&token=83e7c600-5031-48f4-9687-5444a8d00a5f';

  return (
    <div className="app">
      <button onClick={() => setModalIsOpen(true)}>Iniciar Rutina</button>
     <Modal 
      isOpen={modalIsOpen}
      style={
        {
          overlay:{
            backgroundColor:'grey'
          },
          content: {
            position: 'absolute',
            top: '20px',
            left: '20px',
            right: '20px',
            bottom: '20px',
        }
        }
      }
      >
       
        <div>
        <Video  link={url}/>
        </div>
        <div>
          <button onClick={()=> setModalIsOpen(false)}>Categorias</button>
        </div>
     </Modal>

    </div>
    
  );
}

export default App;
