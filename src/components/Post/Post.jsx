import { Link } from "react-router-dom";

const Post = ({post}) => {

    const {id, title, body} = post; 

    return (
        <div className="UserStyle">
            <h4>Post of id: {id} </h4>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>Post Details: </Link>
            <Link to={`/post/${id}`}><button>show Details</button></Link>
        </div>
    );
};

export default Post;