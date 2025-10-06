import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CategoryPost = () => {

    const [posts, setPosts] = useState([])
    const [category, setCategory] = useState(null)
    const {id} = useParams()

    const fetchPosts = async () => {
        const response = await axios.get(`http://localhost:8000/api/posts/category/${id}`)
        setPosts(response.data)
    }

    const fetchCategory = async() => {
        const response = await axios.get(`http://localhost:8000/api/categories/${id}`)
        setCategory(response.data)
    }
    useEffect(()=>{
        fetchPosts()
        fetchCategory()
    },[])

    if(!category){
        return <><h2>Loading...</h2></>
    }

  return (
    <>

    <main>
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-8">
                    <h1 className="mb-4">{category.name}</h1>

                    <div className="card mb-4">
                    {
                       posts.length>0 ? posts.map((post) => <Post post = {post}/>) : <h4>No Posts Available.</h4>
                    }
					</div>
                </div>
            </div>
        </div>
    </main>

    </>
  )
}

export default CategoryPost