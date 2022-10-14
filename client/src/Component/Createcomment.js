import React from 'react'
import { useState } from 'react'
import Commentform from './Commentform'
function Createcomment({id}) {

  const[showAdd, setShowAdd] = useState(true)

  return (
    <div>
      {showAdd? 
      <button className='btn1' id={id} onClick={()=>setShowAdd(()=>!showAdd)}>Add comment</button> 
      : 
      <Commentform showAdd={showAdd} setShowAdd={setShowAdd} id={id}/>}
    </div>
  )
}

export default Createcomment
