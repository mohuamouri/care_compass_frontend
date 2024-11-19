import {Link, Outlet} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft} from "@fortawesome/free-regular-svg-icons";

const ErrorLayout = () => {
    return (
        <div>
            <Outlet/>
            <div className='text-center'>
                <Link className=' ring-1 rounded-md px-3 py-1' to="/">
                    <span className='me-1'>Back to Home </span>
                    <FontAwesomeIcon icon={faArrowAltCircleLeft}/>
                </Link>
            </div>
        </div>
    );
};

export default ErrorLayout;