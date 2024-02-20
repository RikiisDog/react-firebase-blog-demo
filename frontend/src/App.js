import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CreatePost } from "./pages/CreatePost";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { Error404 } from "./pages/Error404";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Home />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/createpost"
                        element={
                            <ProtectedRoute>
                                <CreatePost />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/logout"
                        element={
                            <ProtectedRoute>
                                <Logout />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
