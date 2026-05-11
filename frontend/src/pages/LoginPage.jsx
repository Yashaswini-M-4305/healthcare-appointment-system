import { useState } from "react";

import { Link, useNavigate }
from "react-router-dom";

import { loginUser }
from "../services/authService";

function LoginPage() {

    const navigate = useNavigate();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        if (!email || !password) {

            alert("Please fill all fields");

            return;
        }

        try {

            const data =
                await loginUser({
                    email,
                    password
                });

            console.log(data);

            localStorage.setItem(
                "token",
                data.token
            );

            alert("Login successful");

            navigate("/doctors");

        }
        catch (error) {

            console.log(error);

            if (error.response) {

                alert(
                    error.response.data.message
                );

            }
            else {

                alert("Login failed");
            }
        }
    };

    return (

        <div className="
            min-h-screen
            grid
            grid-cols-1
            lg:grid-cols-2
        ">

            {/* Left Section */}

            <div className="
                hidden
                lg:flex
                flex-col
                justify-center
                items-center
                bg-blue-600
                text-white
                p-12
            ">

                <img
                    src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg"
                    alt="Healthcare"
                    className="
                        w-full
                        max-w-md
                        mb-10
                    "
                />

                <h1 className="
                    text-5xl
                    font-bold
                    text-center
                    leading-tight
                ">
                    Welcome Back
                </h1>

                <p className="
                    mt-6
                    text-lg
                    text-center
                    text-blue-100
                    max-w-md
                ">
                    Access your appointments,
                    doctors, and healthcare
                    records securely.
                </p>

            </div>

            {/* Right Section */}

            <div className="
                flex
                items-center
                justify-center
                bg-gray-50
                px-6
                py-12
            ">

                <div className="
                    w-full
                    max-w-md
                    bg-white
                    rounded-3xl
                    shadow-2xl
                    p-10
                ">

                    <div className="
                        text-center
                        mb-10
                    ">

                        <h2 className="
                            text-4xl
                            font-bold
                            text-gray-800
                        ">
                            Login
                        </h2>

                        <p className="
                            text-gray-500
                            mt-3
                        ">
                            Sign in to continue
                        </p>

                    </div>

                    <form
                        onSubmit={handleLogin}
                        className="
                            space-y-6
                        "
                    >

                        {/* Email */}

                        <div>

                            <label className="
                                block
                                text-gray-700
                                font-medium
                                mb-2
                            ">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(
                                        e.target.value
                                    )
                                }
                                className="
                                    w-full
                                    border
                                    border-gray-300
                                    rounded-xl
                                    px-4
                                    py-3
                                    outline-none
                                    focus:ring-2
                                    focus:ring-blue-400
                                "
                            />

                        </div>

                        {/* Password */}

                        <div>

                            <label className="
                                block
                                text-gray-700
                                font-medium
                                mb-2
                            ">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(
                                        e.target.value
                                    )
                                }
                                className="
                                    w-full
                                    border
                                    border-gray-300
                                    rounded-xl
                                    px-4
                                    py-3
                                    outline-none
                                    focus:ring-2
                                    focus:ring-blue-400
                                "
                            />

                        </div>

                        {/* Button */}

                        <button
                            type="submit"
                            className="
                                w-full
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                py-3
                                rounded-xl
                                font-semibold
                                transition
                            "
                        >
                            Login
                        </button>

                    </form>

                    {/* Register */}

                    <p className="
                        text-center
                        text-gray-500
                        mt-8
                    ">

                        Don't have an account?

                        <Link
                            to="/register"
                            className="
                                text-blue-600
                                font-semibold
                                ml-2
                                hover:underline
                            "
                        >
                            Register
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
}

export default LoginPage;