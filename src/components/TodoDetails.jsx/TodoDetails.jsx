import { useLoaderData } from "react-router-dom";

const TodoDetails = () => {

    const todo = useLoaderData();
    const {id, title, userId, completed} = todo;

    return (
        <div>
            <h2>Todo Details about: {id}  </h2>
            <p>{title}</p>
            <p>Complet: {completed} </p>

        </div>
    );
};

export default TodoDetails;