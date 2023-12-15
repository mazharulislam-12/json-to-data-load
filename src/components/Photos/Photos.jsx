import { useLoaderData } from "react-router-dom";
import Photo from "../Photo/Photo";

const Photos = () => {

    const phots = useLoaderData();

    return (
        <div>
           <h2> Photos: {phots.length} </h2>

            <div>
                {
                    phots.map(photo => <Photo key={photo.id} photo={photo}></Photo> )
                }
            </div>

        </div>
    );
};

export default Photos;