import { Link } from 'react-router-dom';
import './User.css'

const User = ({user}) => {

    const {id, name, username, phone,  email, address, city, website} = user;


    return (
        <div className="UserStyle">
            <h2>Name: {name}</h2>
            <p>User Name: {username}</p>
            <p>Phone: {phone}</p>
            <p>Address:{address.city}</p>
            <p>Website: {website}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            
           <Link to={`/user/${id}`}>
                <button>Click Me</button>
           </Link>


        </div>
    );
};

export default User;