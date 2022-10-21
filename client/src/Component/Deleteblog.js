import React from 'react'
import { confirmAlert } from 'react-confirm-alert';
import {useNavigate} from 'react-router-dom';

function Deleteblog({id,onDeleteBlog}){
  const navigate = useNavigate();
  function handleDelete(e){
    fetch(`https://devbugger.herokuapp.com/blogs/${id}`,{
      method: "DELETE",
      headers:{
        "Content-Type": "application/json"
      }
    })
    onDeleteBlog(e.target.id)
    navigate('/')
  }

  function submit(e){
		confirmAlert({
			title: "Confirm deletion",
			message:"All data will be lost. Wish to delete?",
			buttons: [
				{
					label: "Yes",
					onClick : ()=> handleDelete(e)
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
