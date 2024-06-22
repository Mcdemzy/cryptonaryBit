import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import { ReactNode } from 'react';

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
    const { isAuth, loading } = useAuthContext();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (isAuth) {
        return <>{children}</>
    }

    return (
        <Navigate to="/login" />
    );
};

export default PrivateRoutes;