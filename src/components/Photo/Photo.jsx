import { Link } from "react-router-dom";

const Photo = ({photo}) => {

    const {id, albumId, title, url, thumbnailUrl} = photo;

    return (
        <div>
            <h2>Phot Id: {photo.id} </h2>
            <p>{title}</p>
            <img src= {url} alt="" />
            <br />
            <Link to={`/post/${id}`}>Post Details</Link>

        </div>
    );
};

export default Photo;