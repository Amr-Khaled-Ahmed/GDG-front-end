import { Navigate , useLocation } from "react-router-dom";

export default function ProtectedRouter({ isAllowed, RedirectPath, children }) {
    const Location = useLocation()
    if (isAllowed()) {
        return children;
    } else {
        return <Navigate to={RedirectPath} state={{ from: Location.pathname }} />;
    }
}
