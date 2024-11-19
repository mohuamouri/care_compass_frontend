import React, { createContext, useState, useContext, useEffect } from 'react';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';

const AuthContext = createContext();

export const Auth = ({ children }) => {
    const isAuthenticated = useIsAuthenticated();
    const [auth, setAuth] = useState(isAuthenticated);

    useEffect(() => {
        setAuth(isAuthenticated);
    }, [isAuthenticated]);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
