import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";
import { ReactNode } from "react";
import { Loader } from "lucide-react";

const PrivateRoutes = ({ children }: { children: ReactNode }) => {
  const { isAuth, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <Loader size={40} strokeWidth={1.5} className="animate-spin" />
          <span className="mt-4 text-gray-700">Loading...</span>
        </div>
      </div>
    );
  }

  if (isAuth) {
    return <>{children}</>;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoutes;
