import React, { useState } from 'react';

const ToDoList = () => {
 
  const [tasks, setTasks] = useState([]);
  const [id,setId]=useState();
  const [text,setText]=useState('')
  const [newTask, setNewTask] = useState('');

  
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleEdit = (index) => {
    setId(index);

  };
  const handlechange=()=>{
    tasks[id]=text;
    setId()
  }
 
  const removeTask = (index) => {
    setTasks(tasks.filter((item,index) => index !== index));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            {id==index && (<><input  type="text" onChange={(e)=>setText(e.target.value)} /><button onClick={handlechange}>save</button></>)}

            <button onClick={() => handleEdit(index)}>edit</button>
            <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
