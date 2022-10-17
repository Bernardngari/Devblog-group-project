import React from 'react'
import { confirmAlert } from 'react-confirm-alert'

function DeleteComment({id,OnDeleteComment}) {

  function handleDelete(){
    fetch(`/comments/${id}`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
      .then(res =>res.json())
      .then(deletedComment =>OnDeleteComment(deletedComment))
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
      <button onClick={submit} id={id}>Delete</button>
    </div>
  )
}

export default DeleteComment
