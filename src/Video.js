import React, { Component, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import 'bootstrap/dist/css/bootstrap.css'
import Timer from './Timer'
//import { useTimer } from 'react-timer-hook';



import './App.css'


import ReactPlayer from 'react-player'
import Timer2 from './Timer2'

class Video extends Component {

  timer=false;

  state = {
    url: null,
    playing: true
  }

  load = url => {
    this.setState({
      url,
     })
     this.timer=true;
     
  }

  handlePlayPause = () => {
    //this.load(this.props.link)
    this.setState({ playing: !this.state.playing })
  }

  handlePlay = () => {
    console.log('onPlay')
    //this.load(this.props.link)
    this.setState({ playing: true })
  }

  handlePause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }

  ref = player => {
    this.player = player
  }


  render () {
       
    const time = new Date();
    time.setSeconds(time.getSeconds() + 40); // 40 second timer
    

    const { url, playing} = this.state


    return (
      <div>
      <div class="container">
        <div class="row">

          <div class="col">
         
              <section>
                <div className='player-wrapper'>
                  <ReactPlayer
                    ref={this.ref}
                    className='react-player'
                    width='100%'
                    height='100%'
                    url={url}
                    playing={playing}
                    onPlay={this.handlePlay}
                    onPause={this.handlePause}
                    onProgress={this.handleProgress}

                  />
                </div>
              </section>

          
          </div>
          <div class="col">
            {
              this.timer ? <Timer2 initialMInutes='0'initialSeconds='20'/>:'nelson'
            }
          
          
          </div>


        </div>
        </div>
        <div class="container ">
          <div className="margin-top ">
            <div className="centrar">
          <button onClick={() => this.load(this.props.link)}>Iniciar</button>
          <button onClick={this.handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
          </div>
          </div>
        </div>
     
      </div>
    )
  }
}

export default hot(module)(Video)
//{this.renderLoadButton('https://firebasestorage.googleapis.com/v0/b/saludyejercicio-8966d.appspot.com/o/fitnes.mp4?alt=media&token=83e7c600-5031-48f4-9687-5444a8d00a5f', 'Test A')}
//   <Timer2 date='06/20/2021'/> <Timer expiryTimestamp={time}/> 