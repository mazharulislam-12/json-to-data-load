
const PhotoDetails = () => {

    const {id, title, thumbnailUrl, albumId} = photo;


    return (
        <div>
            <h3>Phot Details about: {id}  </h3>
            <img src= {thumbnailUrl} alt="" />
        </div>
    );
};

export default PhotoDetails;