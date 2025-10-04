import React, { useEffect, useState } from 'react'
import Post from '../components/Post'
import axios from 'axios'
import Header from '../components/header'
import Footer from '../components/Footer'

const PostList = () => {

    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:8000/api/posts')
        setPosts(response.data)
    }
    useEffect(()=>{
        fetchPosts()
    },[])

  return (
    <>

	<main>
		<div className="container mt-4">
			<div className="row">
				<div className="col-lg-8">
					<h1 className="mb-4">Latest Posts</h1>

                    {
                       posts.length>0 ? posts.map((post) => <Post post = {post}/>) : <h4>No Posts Available.</h4>
                    }
				</div>
				<div className="col-lg-4">
					<div className="card mb-4">
						<div className="card-body">
							<h5 className="card-title">About Me</h5>
							<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						</div>
					</div>

					<div className="card mb-4">
						<div className="card-body">
							<h5 className="card-title">Categories</h5>
							<ul className="list-group">
								<li className="list-group-item"><a href="#" className="text-black">Category 1</a></li>
								<li className="list-group-item"><a href="#"  className="text-black">Category 2</a></li>
								<li className="list-group-item"><a href="#"  className="text-black">Category 3</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
        </div>
	</main>

    </>
  )
}

export default PostList