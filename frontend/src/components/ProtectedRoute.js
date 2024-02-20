import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ children }) => {
    const { auth } = useAuth();

    if (!auth.isAuth) {
        // 未認証の場合は Login ページにリダイレクト
        return <Navigate to="/login" replace />;
    }

    return children;
};
