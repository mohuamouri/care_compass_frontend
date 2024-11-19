import {useState, useEffect} from "react";
import {useNavigate, useSearchParams,NavLink} from "react-router-dom";
import api from "../../src/api.js";


const VerifyComponent = () => {

    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();



    useEffect(() => {
        onVerify()
    }, []);

    const onVerify = async () => {

        setError('');


        api.get(`/auth/email-verify/?token=${params.get('token')}`)
            .then((res) => {

                if (res.status === 200) {
                    navigate('/login');
                    
                }
            })
            .catch(err => setError(`${err}`));


    };

    return (
        <div className="card bg-base-100 w-96 shadow-xl mx-auto my-5">
            {error && <div className="text-red-500">{error}</div>}
            <h1>Email Verification</h1>
            
        </div>
    );
};

export default VerifyComponent;
