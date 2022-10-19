import React from 'react'
import {useNavigate} from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';

function Deleteblog({id,onDeleteBlog}){
  const navigate = useNavigate()
  function handleDelete(){
    fetch(`https://devbugger.herokuapp.com/blogs/${id}`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
    onDeleteBlog(id)
    navigate('/')
  }

  function submit(){
		confirmAlert({
			title: "Confirm deletion",
			message:"All data will be lost. Wish to delete?",
			buttons: [
				{
					label: "Yes",
					onClick : ()=> handleDelete()
				},
				{
					label: "No",
					onClick: () => null
				}
			]
		})
	}
  return (
    <div>
      <button onClick={submit} id={id} className="comment">Delete</button>
    </div>
  )
}

export default Deleteblog
