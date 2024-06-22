import {
    type ReactNode,
    useContext,
    createContext,
    useState,
    useEffect,
} from 'react';

import { useCookies } from "react-cookie";
import React from 'react';

type AuthContextType = {
    isAuth: boolean,
    loading: boolean,
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>,
};

export const AuthContext = createContext<AuthContextType | null>(null);

const BASE_URL = "http://localhost:5000";

export const UseAuthContext = ({ children }: { children: ReactNode }) => {
    const [cookies,  removeCookie] = useCookies(['token']);
    const [isAuth, setIsAuth] = useState(!!cookies.token);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyCookie = async () => {
            if (!cookies.token) {
                console.log('no cookies');
                setIsAuth(false);
                setLoading(false);
                return;
            }
            try {
                const res = await fetch(`${BASE_URL}/confirmToken`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ accessToken: cookies.token })
                });
                const result = await res.json();
                if (res.ok) {
                    result.status == true ? setIsAuth(true) : setIsAuth(false);
                } else {
                    setIsAuth(false);
                }
                console.log(result);
            } catch (error) {
                console.log('Error verifying token:', error);
                setIsAuth(false);
            }
            setLoading(false);
        };
        verifyCookie();
    }, [cookies.token]);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('error');
    }
    return context;
};
