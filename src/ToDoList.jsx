import React, {useState} from "react"

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim() !== "") {
            setTasks(t => [...tasks, newTask]);
            setNewTask("");
        }
        
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }   

    function moveTaskUp(index) {
        const updatedtask = [...tasks];
        if(index > 0) {
            [updatedtask[index - 1], updatedtask[index]] = [updatedtask[index], updatedtask[index - 1]];
            setTasks(updatedtask);
        }
    }

    function moveTaskDown(index) {
        const updatedtask = [...tasks];
        if(index < tasks.length - 1) {
            [updatedtask[index + 1], updatedtask[index]] = [updatedtask[index], updatedtask[index + 1]];
            setTasks(updatedtask);
        }
    }

    return(<div className="to-do-list">
        <h1>To-Do-list</h1>
        <div>
            <input type="text" placeholder="Enter a Task..." value={newTask} onChange={handleInputChange}/>
            <button className="add-button" onClick={addTask}>Add task</button>
        </div>
        <ol>
            {tasks.map((task, index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete task</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>👆</button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
            </li>)}
        </ol>

    </div>);
}
export default ToDoList
