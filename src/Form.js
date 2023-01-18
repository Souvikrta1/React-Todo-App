import React from "react";

const Form = (props)=>{
    const handleInput = (e) =>{
        props.setInput(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.setTodos([...(props.todos),{title:props.input, completed:"Pending"}]);
        props.setInput("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text'  placeholder = 'Create a Todo' className="todo-input" value={props.input} required onChange={handleInput}></input>
            <button type="submit">Create</button>
        </form>
    )
}

export default Form;