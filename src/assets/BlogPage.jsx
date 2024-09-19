import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from './BlogContext';


const BlogPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = useContext(BlogContext)


  const navigate = useNavigate();

  const handleSubmit = () => {
    addPost(title, content);
    navigate('/');
  };

  return (
    <div>
      <h1>Blog Page</h1>
      <h5>you can add your details here.....</h5>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <br /> 
        <textarea style={{height:"200px"}} placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
          <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogPage;
