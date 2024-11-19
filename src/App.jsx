import RoutesComponent from "./routes.jsx";
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import refresh from "../pages/auth/refresh.jsx";
import {Auth} from "./AuthContext.jsx";



const App = () => {

    const store = createStore({
        authName:'_auth',
        authType:'cookie',
        cookieDomain: window.location.hostname,
        cookieSecure: window.location.protocol === 'http:',
        refresh: refresh
    })

    return (
        <AuthProvider store={store}>
            <Auth>
                <RoutesComponent/>
            </Auth>
        </AuthProvider>
    );
};

export default App;