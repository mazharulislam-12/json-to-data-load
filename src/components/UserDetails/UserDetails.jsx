import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name,username,phone, company, website} = user;
    return (
        <div>
            <h2>Details about user</h2>
            <h3>Name: {name} </h3>
            <p>User Name: {username} </p>
            <p>Phone: {phone} </p>
            <p>Company: {company.name} </p>
            <p>Website: {website} </p>

        </div>
    );
};

export default UserDetails;