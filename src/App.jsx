
import './App.css'
import VideoPlayer from './component/VideoPlayer'
import Videoform from './component/Videoform'
import React, { useState } from 'react'


function App() {
  const [timestamp, setTimeStamp] = useState([])
  const [captionData, setCaptionData] = useState([])
  const [play, setPlay] = useState(false)
  const [url, setUrl] = useState("")

  const handleGenerate = () => {
    if(url.length){
      setPlay(true)
    }else{
      alert("Please Enter an Valid Video URL First")
    }
  }

  return (
    <>
    <header className="header"><h1>Add Caption To Video</h1></header>
      <div className='container'>
        {play ? <VideoPlayer captionData={captionData} url={url}/> 
        : <Videoform timestamp={timestamp} setTimeStamp={setTimeStamp} captionData={captionData} setCaptionData={setCaptionData} setPlay={setPlay} play={play} setUrl={setUrl} url={url}/>}
      </div>
    {play?<div className="buttons"><button onClick={()=>handleGenerate()} className='generate btn'>Generate and Play</button> <button className='generate' onClick={()=>window.location.reload()}>Refresh</button></div>:<button onClick={()=>handleGenerate()} className='generate btn'>Generate and Play</button>}
    </>
  )
}

export default App
