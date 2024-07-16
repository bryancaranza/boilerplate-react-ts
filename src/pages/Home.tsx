import { Button } from "@/components/ui/button";
import { ROUTES } from "@/routes/routes";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 h-full">
      <p>Home</p>
      <div className="flex gap-2">
        <Button asChild>
          <Link to={ROUTES.LOGIN}>Go to Login</Link>
        </Button>
        <Button asChild>
          <Link to={ROUTES.DASHBOARD}>Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
