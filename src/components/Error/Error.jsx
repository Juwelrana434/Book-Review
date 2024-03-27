import { Link } from "react-router-dom";

Link

const Error = () => {
    return (
        <div className="flex flex-col items-center my-auto">
           <h1>Oops !!!! 404 not found</h1> 
           <Link to='/'>Go Home</Link>
           
        </div>
    );
};

export default Error;