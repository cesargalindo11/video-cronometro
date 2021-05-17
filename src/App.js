import React from 'react'
import Video from './Video'

import 'bootstrap/dist/css/bootstrap.css'




const App = () => {


    const state=true;
    const url='https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/fitnes.mp4?alt=media&token=83e7c600-5031-48f4-9687-5444a8d00a5f';
 
    return (
        <div class="container">


                    {
                       state? <Video  link={url}/>:console.log("nelson")
                    }
 
        </div>
    )
}
export default App;
