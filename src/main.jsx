import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BlogProvider } from './assets/BlogContext.jsx'
import TodoList from './assets/TodoList.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
{/* <TodoList/> */}
    
<BlogProvider>

    <App />
</BlogProvider>
    
  </StrictMode>,
)
