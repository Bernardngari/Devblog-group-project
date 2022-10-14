import React from 'react'
import { useState } from 'react'
import Commentform from './Commentform'
function Createcomment({id}) {

  const[showAdd, setShowAdd] = useState(true)

  return (
    <div>
      {showAdd? 
      <button className='comment' id={id} onClick={()=>setShowAdd(()=>!showAdd)}>reply</button> 
      : 
      <Commentform showAdd={showAdd} setShowAdd={setShowAdd} id={id}/>}
    </div>
  )
}

export default Createcomment
