import React from 'react';

const TodosList = (props) =>{
    const handleDelete = (e) =>{
        let mainData = JSON.parse(localStorage.getItem("todoData"));
        mainData.forEach((ele,index)=>{
            if(index === e.target.parentElement.value){
                mainData.splice(index,1);
                props.setTodos(mainData);
            }    
        })

    }

    const handleEdit = (e) =>{
        let mainData = JSON.parse(localStorage.getItem("todoData"));
        mainData.forEach((ele,index)=>{
            if(index === e.target.parentElement.value){
                let newText = prompt("Update",ele.title);
                ele.title = newText;
                props.setTodos(mainData);
            }    
        })
    }

    const handleComplete = (e) =>{
        let mainData = JSON.parse(localStorage.getItem("todoData"));
        mainData.forEach((ele,index)=>{
            if(index === e.target.parentElement.value){
                if(ele.completed === "Pending"){
                    ele.completed = "Done"
                } else {
                    ele.completed = "Pending";
                }
                props.setTodos(mainData);
            }
        }) 
    }

    return (
        <ul className='todolist-container'>
            {props.todos.map((todo,index)=>( 
                <li className='list-items' value={index} key={index}>
                    <input className="list" value={todo.title} onChange={(e) => e.preventDefault()}></input>
                    <button className={todo.completed} onClick={handleComplete}>{todo.completed}</button>
                    <button className='edit' onClick={handleEdit}>Edit</button>
                    <button className='delete' onClick={handleDelete}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default TodosList;