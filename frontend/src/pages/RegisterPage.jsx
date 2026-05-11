import { useState } from "react";

import {
    Link,
    useNavigate
} from "react-router-dom";

import {
    registerUser
} from "../services/authService";

function RegisterPage() {

    const navigate = useNavigate();

    const [name, setName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const handleRegister =
        async (e) => {

        e.preventDefault();

        if (
            !name ||
            !email ||
            !password
        ) {

            alert("Please fill all fields");

            return;
        }

        try {

            const data =
                await registerUser({
                    name,
                    email,
                    password
                });

            console.log(data);

            localStorage.setItem(
                "token",
                data.token
            );

            alert(
                "Registration successful"
            );

            navigate("/doctors");

        }
        catch (error) {

            console.log(error);

            if (error.response) {

                alert(
                    error.response
                        .data.message
                );

            }
            else {

                alert(
                    "Registration failed"
                );
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
                    src="https://img.freepik.com/free-vector/online-doctor-concept_23-2148528511.jpg"
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
                    Join HealthCare+
                </h1>

                <p className="
                    mt-6
                    text-lg
                    text-center
                    text-blue-100
                    max-w-md
                ">
                    Create your account and
                    start booking appointments
                    with trusted specialists.
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
                            Register
                        </h2>

                        <p className="
                            text-gray-500
                            mt-3
                        ">
                            Create your account
                        </p>

                    </div>

                    <form
                        onSubmit={
                            handleRegister
                        }
                        className="
                            space-y-6
                        "
                    >

                        {/* Name */}

                        <div>

                            <label className="
                                block
                                text-gray-700
                                font-medium
                                mb-2
                            ">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) =>
                                    setName(
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
                            Create Account
                        </button>

                    </form>

                    {/* Login */}

                    <p className="
                        text-center
                        text-gray-500
                        mt-8
                    ">

                        Already have an account?

                        <Link
                            to="/login"
                            className="
                                text-blue-600
                                font-semibold
                                ml-2
                                hover:underline
                            "
                        >
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
}

export default RegisterPage;