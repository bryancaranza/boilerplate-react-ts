import { Navigate } from "react-router-dom";
import { useAuth } from "@/state/context/AuthContext";
import { IProtectedRoute } from "@/interface/IAuth";

const ProtectedRoute = ({ component: Component }: IProtectedRoute) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
