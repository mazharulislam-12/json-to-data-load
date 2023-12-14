import { useLoaderData } from "react-router-dom";
import Todo from "../Todo/Todo";

const Todos = () => {

    const todos = useLoaderData();

    return (
        <div>
            <h1>Todos: {todos.length} </h1>
            <div className="users">
                {
                    todos.map(todo => <Todo key={todo.id} todo={todo}></Todo>)
                }
            </div>
        </div>
    );
};

export default Todos;