import { Suspense } from "react";
import { AuthProvider } from "./state/context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/custom/Loader";
import RouteElements from "./routes/RouteElements";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AuthProvider>
        <BrowserRouter>
          <RouteElements />
        </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
};

export default App;
