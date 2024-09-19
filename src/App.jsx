import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './assets/BlogPage';
import Homepage from './assets/Homepage';
import ContentPage from './assets/ContentPage';



function App() {
  return (
    <Router>
      
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/link" element={<ContentPage/>}/>
        </Routes>
     
    </Router>
  );
}

export default App;
