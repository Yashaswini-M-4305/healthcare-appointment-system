import {
    Link,
    useNavigate
}
from "react-router-dom";

function Navbar() {

    const navigate =
        useNavigate();

    const token =
        localStorage.getItem("token");

    const handleLogout = () => {

        localStorage.removeItem(
            "token"
        );

        navigate("/login");
    };

    return (

        <nav className="
            bg-white
            shadow-md
            px-8
            py-4
            flex
            justify-between
            items-center
        ">

            {/* Logo */}

            <Link
                to="/"
                className="
                    text-3xl
                    font-bold
                    text-blue-600
                "
            >
                HealthCare+
            </Link>

            {/* Nav Links */}

            <div className="
                flex
                items-center
                gap-6
            ">

                <Link
                    to="/"
                    className="
                        text-gray-700
                        hover:text-blue-600
                        font-medium
                    "
                >
                    Home
                </Link>

                <Link
                    to="/doctors"
                    className="
                        text-gray-700
                        hover:text-blue-600
                        font-medium
                    "
                >
                    Doctors
                </Link>

                <Link
                    to="/appointments"
                    className="
                        text-gray-700
                        hover:text-blue-600
                        font-medium
                    "
                >
                    Appointments
                </Link>

                {
                    token ? (

                        <button
                            onClick={
                                handleLogout
                            }
                            className="
                                bg-red-500
                                hover:bg-red-600
                                text-white
                                px-5
                                py-2
                                rounded-xl
                                font-medium
                                transition
                            "
                        >
                            Logout
                        </button>

                    ) : (

                        <Link
                            to="/login"
                            className="
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                px-5
                                py-2
                                rounded-xl
                                font-medium
                                transition
                            "
                        >
                            Login
                        </Link>
                    )
                }

            </div>

        </nav>
    );
}

export default Navbar;