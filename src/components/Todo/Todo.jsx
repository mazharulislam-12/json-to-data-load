import { Link } from "react-router-dom";

const Todo = ({todo}) => {
    const {userId, id, title} = todo; 
    return (
        <div className="UserStyle">
            <h3>Todo of Id: {id} </h3>
            <h5>{title}</h5>
            <Link to={`/todo/${id}`}>Post Details</Link>
            <Link to={`/todo/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

export default Todo;