import Form from "./Form";
import Header from "./Header";
import React, {useState} from "react";
import TodosList from "./TodoList";


const App = () =>{
    const [input,setInput] = useState("");
    const [todos,setTodos] = useState([]);

    React.useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("todoData"));
        if(!data) data = [];
        setTodos(data);
    },[])

    React.useEffect(()=>{
        localStorage.setItem("todoData",JSON.stringify(todos));
    },[todos])

    return (
        <div className='container'>
            <Header/>
            <Form 
                input = {input}
                setInput = {setInput}
                todos = {todos}
                setTodos = {setTodos}
            />
            <TodosList 
                todos={todos} 
                setTodos={setTodos}
            />
        </div>
    )
}

export default App;