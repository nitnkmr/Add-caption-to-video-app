import React, { useState } from 'react'
import "./Videoform.css"

const Videoform = ({ timestamp, setTimeStamp, captionData, setCaptionData, setPlay, setUrl ,url}) => {

  const [warn, setWarn] = useState(false)

  const handleData = (e) => {
    e.preventDefault();
    setCaptionData([...captionData, timestamp])
    setTimeStamp({startTime:"",endTime:"",text:""})
    setWarn(true);
    setTimeout(() => {
      setWarn(false);
    }, 1000);
  }
  return (
    <>
      <div className="formContainer">
        <form action="" onSubmit={handleData} className='form'>
          <label htmlFor="url">Enter Video URL :- </label>
          <input type="url" name="url" id="url" placeholder='Paste your URL' value={url} onChange={(e) => setUrl(e.target.value)} required/>
          <div className="timestamp">
          <label htmlFor="startTime">Start Time</label>
          <input type="number" name="startTime" id="startTime" placeholder='EX :- 0' value={timestamp.startTime} onChange={(e) => setTimeStamp({ ...timestamp, [e.target.name]: parseInt(e.target.value) })} required />
          <label htmlFor="endTime">End Time</label>
          <input type="number" name="endTime" id="endTime" placeholder='EX :- 0' value={timestamp.endTime} onChange={(e) => setTimeStamp({ ...timestamp, [e.target.name]: parseInt(e.target.value) })} required/>
          </div>
          <label htmlFor="caption">Enter Caption Here</label>
          <textarea type="text" name="text" id="text" placeholder='Your Text/Caption' value={timestamp.text} onChange={(e) => setTimeStamp({ ...timestamp, [e.target.name]: e.target.value })} required rows={5}/>
          <input type="submit" value="Add Tast" />
          {warn?<p className='warning'>Entry Added please fill new Entry</p>:""}
        </form >
      </div>
    </>
  )
}

export default Videoform