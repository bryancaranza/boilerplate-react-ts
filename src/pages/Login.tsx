import { Button } from "@/components/ui/button";
import { ROUTES } from "@/routes/routes";
import { useAuth } from "@/state/context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();

  return (
    <div className="flex flex-col justify-center items-center gap-2 h-full">
      <p>Login</p>
      <Button onClick={login}>Login</Button>
      <div className="flex gap-2">
        <Button asChild>
          <Link to={ROUTES.ROOT}>Go to Home</Link>
        </Button>
        <Button asChild>
          <Link to={ROUTES.DASHBOARD}>Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default Login;
