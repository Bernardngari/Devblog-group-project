import React from 'react'
import { useState } from 'react'
import Commentform from './Commentform'
import { Link } from 'react-router-dom'
function Createcomment({id, onAddComment,loggedInUser}) {
  const[showAdd, setShowAdd] = useState(true)
  const [error, setShowError] = useState(false)

  return (
    <div>
      {showAdd? 
      <div>
        {loggedInUser? <button className='comment' id={id} onClick={()=>setShowAdd(()=>!showAdd)} >respond</button> 
        :
        <> 
        <button className='comment' id={id} onMouseEnter={()=>setShowError(!error)} >reply</button> 
        {error?<p className='error'>You must <Link to="/login">Login</Link> to reply</p> : null}
        </>
        }
      </div>
      : 
      <Commentform showAdd={showAdd} setShowAdd={setShowAdd} id={id} onAddComment={onAddComment}/>}
    </div>
  )
}

export default Createcomment
