import React, { useContext } from 'react'
import { BlogContext } from './BlogContext'

const ContentPage = () => {
const {posts} = useContext(BlogContext)
  return (
    <div>
       {posts.map((item,index)=><div key={index}>
     {item.content}  
      </div>)}
    </div>
  )
}

export default ContentPage
