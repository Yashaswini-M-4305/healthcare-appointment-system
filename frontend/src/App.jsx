import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DoctorsPage from "./pages/DoctorsPage";

import AppointmentsPage from "./pages/AppointmentsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Home */}

                <Route
                    path="/"
                    element={<HomePage />}
                />

                {/* Auth */}

                <Route
                    path="/login"
                    element={<LoginPage />}
                />

                <Route
                    path="/register"
                    element={<RegisterPage />}
                />

                {/* Doctors */}

                <Route
                    path="/doctors"
                    element={
    <ProtectedRoute>
        <DoctorsPage />
    </ProtectedRoute>
}
                />

                {/* Appointments */}

                <Route
                    path="/appointments"
                    element={
    <ProtectedRoute>
        <AppointmentsPage />
    </ProtectedRoute>
}
                />

                {/* 404 */}

                <Route
                    path="*"
                    element={<NotFoundPage />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;