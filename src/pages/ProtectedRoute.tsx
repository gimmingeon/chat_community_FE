import { Navigate } from "react-router-dom";
import { useMyInfo } from "../hooks/useMyInfo";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {

    const { data: user, isLoading } = useMyInfo();

    if (isLoading) return <div>로딩중...</div>;

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
}