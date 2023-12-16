const DisplayTodoList = ({todoList, setTodoList}) => {

    const handleOnClick = (todoPosition) => {
        setTodoList((prevTodoList) => prevTodoList.filter((todo,i) => i !== todoPosition))
    };
    return (
        <div>
            <ul>
                {todoList.map((todo, i) => {
                    return (
                        <li key={`${todo}-${i}`} id={`${todo}-${i}`}>{todo} <button onClick={() => handleOnClick(i)}>❌</button></li>
                    )
                })}
            </ul>
        </div>
    )
};


export default DisplayTodoList;
