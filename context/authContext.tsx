import {
    type ReactNode,
    useContext,
    createContext,
    useState,
    useEffect,
} from "react";

import { useCookies } from "react-cookie";
import { BASE_URL, signup, login, logOut } from "../utils/services";

type User = {
    email: string,
    firstName: string,
    lastName: string,
    accountBalance: number
}

type SignupType = {
    email: string,
    firstName: string,
    lastName: string,
    password: string
}

type AuthContextType = {
    isAuth: boolean,
    loading: boolean,
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>,
    removeCookies: () => void,
    user: User | null,
    handleSignup: (body: SignupType) => Promise<void>,
    handleLogin: (email: string, password: string) => Promise<void>,
    handleLogOut: () => Promise<void>
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const UseAuthContext = ({ children }: { children: ReactNode }) => {
    const [, removeCookie] = useCookies(["token"]);
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    const handleSignup = async (body: SignupType) => {
        try {
            const res = await signup(body);
            if (res.ok) {
                const result = await res.json();
                setIsAuth(true);
                setUser(result.newUser);
                console.log("signup successful")
            } else {
                console.error("Failed to signup");
            }
        } catch (error) {
            console.error("Error during signup:", error);
        }
    };

    const handleLogin = async (email: string, password: string) => {
        try {
            const res = await login({
                email,
                password,
            });
            if (res.ok) {
                const result = await res.json();
                setIsAuth(true);
                setUser(result.user);
                console.log("login successful")
            } else {
                console.error("Failed to login");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    const handleLogOut = async () => {
        try {
            const res = await logOut();
            if (res.ok) {
                removeCookies();
            } else {
                console.error("Failed to logout");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        }
    }

    const removeCookies = () => {
        removeCookie("token", { path: "/" });
        setIsAuth(false);
        setUser(null);
    };

    useEffect(() => {
        const verifyCookie = async () => {
            try {
                const res = await fetch(`${BASE_URL}/confirmToken`, {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const result = await res.json();
                if (res.ok && result.status) {
                    setIsAuth(true);
                    setUser(result.user);
                } else {
                    console.log("result___false =>", res)
                    removeCookies();
                }
            } catch (error) {
                console.log("Error verifying token:", error);
                removeCookies();
            }
            setLoading(false);
        };
        verifyCookie();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, loading, removeCookies, user, handleSignup, handleLogin, handleLogOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("error");
    }
    return context;
};
