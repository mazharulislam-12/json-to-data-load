import { useNavigate, useRouteError } from "react-router-dom";

const ErroorPage = () => {

    const navigate = useNavigate();

    const error = useRouteError();
    console.log(error);

    const handleErrorBack = () =>{
        navigate(-1)
    }
    
    return (
        <div>
            <h2>Opps !! </h2>   

            <p>{error.statusText || error.message}</p>

            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    
                </div>
            }

            <button onClick={handleErrorBack}>Go Back </button>

        </div>
    );
};

export default ErroorPage;