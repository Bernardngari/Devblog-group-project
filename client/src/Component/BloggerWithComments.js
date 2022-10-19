import React from 'react'
import {useParams} from 'react-router-dom'
import Createcomment from './Createcomment'
import { useEffect, useState} from 'react';
import capitalize from './capitalize';
import Comment from './Comment';
import Editblog from './Editblog';
import Deleteblog from './Deleteblog';
import { Link } from 'react-router-dom';


function BloggerWithComments({ loggedInUser,onDeleteBlog}){
  const {id} = useParams();
  const [blog, setBlog]= useState({});
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [blogOwner, setId] = useState("")
  
  const fetchData = async () => {
    const response = await fetch(`https://devbugger.herokuapp.com/blogs/${id}`,{
      credentials: 'include',
      mode: 'cors'
    })
    if (!response.ok) {
      throw new Error('Data could not be fetched!')
    } else {
      return response.json()
    }
  }
  useEffect(()=>{
    fetchData()
      .then((res) =>{
        setBlog(res)
        setComments(res.comments)
        setName(res.blogger.username)
        setId(res.blogger.id)
      })
      
  },[])

  function onEditComment(edittedComment){
    let filtered = comments.filter((comment)=> comment.id !== edittedComment.id)
    let updated = [...filtered, edittedComment]
    setComments(updated)
  }

  function onDeleteComment(deletedComment){
    let updated = comments.filter((comment) => comment.id !== deletedComment)
    setComments(updated)
  }

  const onEditBlog= (editedBlog)=>{
    setBlog(editedBlog);
  }

  const onAddComment= (newComment)=>{
    let updatedState = [...comments, newComment]
    setComments(updatedState);
  }

  
  
  return (
    <div className="container-1">
      <div  className='backHome'><Link to="/">Back home</Link></div>
          <div key={blog.id} >
            <p className="title">{blog.title}</p>
            <p>{blog.content}</p>
            <p><strong>Written by: @{capitalize(name)}</strong></p>
            <div className='wrap'>
                <Createcomment id={blog.id} onAddComment={onAddComment} loggedInUser={loggedInUser}/>
                {loggedInUser === blogOwner? <Editblog blog={blog} blogOwner={blogOwner} id={blog.id} onEditBlog={onEditBlog}/> : null}
                {loggedInUser === blogOwner ? <Deleteblog id={blog.id} onDeleteBlog={onDeleteBlog} /> : null}
            </div>
              <Comment comments={comments} onEditComment={onEditComment} loggedInUser={loggedInUser} onDeleteComment={onDeleteComment}/>
          </div>
      </div>
  )
}

export default BloggerWithComments
