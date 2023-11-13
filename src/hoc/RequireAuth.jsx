import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hook/hook";

const RequireAuth = ({children}) => {
    const location = useLocation();
    const { auth } = useAuth();
    const login = auth.login;

    if (!login) {
        return <Navigate to="/login" state={{from: location}} />
    }

    return children;
}

export default RequireAuth;