import React, { useEffect, useState } from 'react'
import Header from './header'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PostDetail = () => {
    const[post, setPost] = useState(null)
    const {id} = useParams()

    const fetchPost= async()=>{
        try {
            const response = await axios.get(`http://localhost:8000/api/posts/${id}`)
            setPost(response.data)            
        } catch (error) {
            console.log("Error fetching post: ",error)
        }
    }
    useEffect(()=>{
        fetchPost()
    },[])

    if(!post){
        return <p>Loading...</p>
    }

    const formattedDate = Intl.DateTimeFormat('en-US', {
        month : 'long',
        day : 'numeric',
        year : 'numeric'
    }).format(new Date(post.createdAt))

  return (
    <>
        <main class="container my-4">
        <div class="row">
            <article class="col-lg-8">
                <h2 class="blog-post-title">{post.title}</h2>
                <p class="blog-post-meta">{formattedDate} by <a href="#">{post.author}</a></p>

                <img class="mb-3 img-fluid" src="https://via.placeholder.com/300" alt={post.title}/>
                <div class="blog-post-content">
                    <p>{post.content}</p>
                </div>
            </article>

        </div>
    </main>
    </>
  )
}

export default PostDetail