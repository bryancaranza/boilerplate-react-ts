import { Navigate } from "react-router-dom";
import { useAuth } from "@/state/context/AuthContext";
import { IProtectedRoute } from "@/interface/IAuth";

const PublicRoute = ({ component: Component }: IProtectedRoute) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? <Component /> : <Navigate to="/dashboard" />;
};

export default PublicRoute;
