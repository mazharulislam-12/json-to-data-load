import { useLoaderData } from "react-router-dom";

const CommentsDetails = () => {
    const comment = useLoaderData();

    const {id, name, email, body} = comment;

    return (
        <div>
           <h2> Comment Details: {id} </h2>
           <h3>Name: {name} </h3>
           <h4>Email: {email} </h4>
           <p><small>{body}</small></p>
        </div>
    );
};

export default CommentsDetails;