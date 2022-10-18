import React from 'react'
import { confirmAlert } from 'react-confirm-alert'

function DeleteComment({id,onDeleteComment}) {

  function handleDelete(){
    fetch(`https://devbugger.herokuapp.com/comments/${id}`,{
      "method": "DELETE",
      "headers":{
        "Content-Type": "application/json"
      }
    })
    onDeleteComment(id)
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
      <button onClick={submit} id={id} className='comment'>Delete</button>
    </div>
  )
}

export default DeleteComment
