import React from 'react'
import {useParams} from 'react-router-dom'
import Createcomment from './Createcomment'
import { useEffect, useState } from 'react';
import capitalize from './capitalize';
import Comment from './Comment';

function BloggerWithComments(){
  const {id} = useParams();
  const [blog, setBlog]= useState({});
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const fetchData = async () => {
    const response = await fetch(`/blogs/${id}`)
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
      })
      .catch((e) =>{
        console.log(e.message);
      })
  },[])

  console.log(comments)
  const onAddComment= (newComment)=>{
    let updatedState = [...comments, newComment]
    setComments(updatedState.reverse());
  }
  return (
    <>
    <div className="container-1">
          <div key={blog.id}>
            <p className="title">{blog.title}</p>
            <p>{blog.content}</p>
            <p><strong>Written by: {capitalize(name)}</strong></p>
            <div>
              <Createcomment id={blog.id} onAddComment={onAddComment}/>
            </div>
              <Comment comments={comments}/>
          </div>
      </div>
    </>
  )
}

export default BloggerWithComments
