import {
  type ReactNode,
  useContext,
  createContext,
  useState,
  useEffect,
} from "react";

import { BASE_URL, signup } from "../utils/services";
import { auth } from "../firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { type User } from "firebase/auth";

type UserType = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  accountBalance: number;
  bch: number;
  bnb: number;
  btc: number;
  eth: number;
  sol: number;
  trx: number;
  usdt: number;
};

type SignupType = {
  email: string;
  firstName: string;
  lastName: string;
  userId: string;
};

type AuthContextType = {
  isLoading: boolean;
  user: UserType | null;
  handleSignup: (body: SignupType) => Promise<void>;
  handleLogOut: () => Promise<void>;
  currentUser: User | null;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const UseAuthContext = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<UserType | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setIsLoading(true);

      if (user) {
        try {
          const response = await fetch(`${BASE_URL}/user`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${user.uid}`
            }
          });

          if (response.ok) {
            const userData = await response.json();
            setUser(userData.user);
          } else {
            console.error("Failed to fetch user data");
            setUser(null);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUser(null);
        }
      } else {
        setUser(null);
      }

      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSignup = async (body: SignupType) => {
    try {
      const res = await signup(body);
      if (res.ok) {
        const result = await res.json();
        localStorage.setItem("token", result.newUser.userId)
        setUser(result.newUser);
      } else {
        console.error("Failed to signup");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("token");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        currentUser,
        user,
        handleSignup,
        handleLogOut,
      }}
    >
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