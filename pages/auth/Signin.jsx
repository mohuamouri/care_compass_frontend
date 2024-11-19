import {useState, useEffect} from "react";
import {NavLink} from "react-router-dom";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import api from "../../src/api.js";
// import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../src/AuthContext.jsx";

const SignInComponent = () => {
    const signIn = useSignIn();
    const [formData, setFormData] = useState({email: '', password: ''});
    const [error, setError] = useState('');
    // const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();



    useEffect(() => {
        if (auth) {
            navigate('/');
        }
    }, [auth]);

    const onSubmit = async (e) => {
        e.preventDefault();
        setError('');


        api.post('/auth/login/', formData)
            .then((res) => {

                if (res.status === 200) {
                    const signInSuccess = signIn({
                        auth: {
                            token: res.data.access,
                            type: 'Bearer'
                        },
                        refresh: res.data.refresh,
                        expiresIn: 3600,
                        tokenType: 'Bearer',
                    });
                    console.log(signInSuccess, res.data);
                    if (!signInSuccess) {
                        setError('Sign-in failed. Please try again.');
                    }else{
                        setAuth(true)
                        navigate('/');
                    }

                }
            })
            .catch(err => setError(`${err}`));


    };

    return (
        <div className="card bg-base-100 w-96 shadow-xl mx-auto my-5">
            <div className="card-body">
                <div className="card-title mb-5">Login</div>
                <form onSubmit={onSubmit} className="space-y-4">
                    {error && <div className="text-red-500">{error}</div>}
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"/>
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"/>
                        </svg>
                        <input
                            className="grow"
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            value={formData.email}
                        />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd"/>
                        </svg>
                        <input
                            className="grow"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                            value={formData.password}
                        />
                    </label>
                    <button className="btn btn-active btn-neutral w-full">Submit</button>
                    <NavLink
                                    to="/registration"
                                    className="text-primary text-center d-block px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Create an Account
                                </NavLink>
                </form>
            </div>
        </div>
    );
};

export default SignInComponent;
