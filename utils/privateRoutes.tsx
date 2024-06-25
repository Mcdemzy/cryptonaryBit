import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import { ReactNode } from 'react';
import { Loader } from "lucide-react";

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
    const { isAuth, loading } = useAuthContext();

    if (loading) {
        return <Loader size={40} strokeWidth={1.5} />;
    }

    if (isAuth) {
        return <>{children}</>
    }

    return (
        <Navigate to="/login" />
    );
};

export default PrivateRoutes;