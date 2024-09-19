import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BlogContext } from './BlogContext'

const Homepage = () => {

    const {posts} = useContext(BlogContext)
  console.log(posts)
  return (
    <div>
      <Link to="/blog">
      <button>submit</button>
      </Link>
      <div>
        <Link to="/link">
      {posts.map((item,index)=><div key={index}>
     {item.title}  
      </div>)}
      </Link>
      </div>
    </div>
  )
}

export default Homepage
