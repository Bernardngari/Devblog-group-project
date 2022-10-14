import React from 'react'
import {useParams, NavLink} from 'react-router-dom'
import Createcomment from './Createcomment'
import { useEffect, useState } from 'react';
import capitalize from './capitalize';

function BloggerWithComments(){
  const {id} = useParams();
  const [blog, setBlog]= useState({});
  useEffect(()=>{
    fetch(`/blogs/${id}`)
    .then(res =>res.json())
    .then(data => setBlog(data))
  },[])
  let array = blog.comments
  console.log(array);
   let test = (array.map(comment =>(
    <p>{comment.comment}</p>
  )))
  return (
    <>
    <div className="container-1">
          <div key={blog.id}>
            <p className="title">{blog.title}</p>
            <p>{blog.content}</p>
            {/*<p><strong>Written by: {capitalize(blog.blogger.username)}</strong></p>*/}
            <div>
              <Createcomment id={blog.id} />
            </div>
            {test}
          </div>
      </div>
    </>
  )
}

export default BloggerWithComments
