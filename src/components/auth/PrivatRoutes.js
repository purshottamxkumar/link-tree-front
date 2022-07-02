import { Navigate, Route } from "react-router-dom";
import { useToken } from "./useUser";

export const PrivateRoute = (props) => {
  const [token] = useToken();

  if (!token) return <Navigate replace to="/login" />;

  return <Route {...props} />;
};
