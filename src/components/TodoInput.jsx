import { useEffect, useState } from "react";
import DisplayTodoList from "./DisplayTodoList";

const TodoInput = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState(["wash dishes", "study for 1hr", "cook food", "play basketball", "read a book"]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList((prevToDoList) => [...prevToDoList, todo]);
        setTodo("");
        e.target[0].value = "";
    };

    const handleOnchange = (e) => {
        setTodo(e.target.value);
    }

    useEffect(()=> {}, [todo, todoList])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleOnchange} required/>
                <br />
                <button type="submit">Submit</button>
            </form>
            <DisplayTodoList todoList={todoList} setTodoList={setTodoList}/>
        </div>
    )
};

export default TodoInput;
