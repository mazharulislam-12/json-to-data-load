import { Link } from "react-router-dom";

const Comment = ({comment}) => {
    const {id, name, email, body} = comment;

    return (
        <div className="UserStyle">
            <h3>Comment of id: {id} </h3>        
            <h4> Name:  {name} </h4>
            <h5>Email:{email}</h5>
            <Link to={`/comment/${id}`}>Comment Details</Link>
        </div>
    );
};

export default Comment;