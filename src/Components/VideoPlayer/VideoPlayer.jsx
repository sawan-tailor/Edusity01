import React, { useRef } from 'react'
import './VideoPlayer.css'
import video01 from '../../assets/video01.mp4'

const VideoPlayer = ({playState, setplayState}) => {

    const player = useRef(null);
    const closePlayer = (e) => {
        if(e.target === player.current){
            setplayState(false)
        }
    }

  return (
    <div className={`video-player ${playState? '' : 'hide'}`} ref={player} onClick={closePlayer}> 
      <video src={video01} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
