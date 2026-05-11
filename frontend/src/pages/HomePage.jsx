import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomePage() {

    return (

        <div className="
            min-h-screen
            bg-gradient-to-br
            from-blue-50
            to-white
        ">

            <Navbar />

            {/* Hero Section */}

            <section className="
                max-w-7xl
                mx-auto
                px-6
                py-20
                grid
                grid-cols-1
                lg:grid-cols-2
                gap-12
                items-center
            ">

                {/* Left */}

                <div>

                    <p className="
                        text-blue-600
                        font-semibold
                        mb-4
                    ">
                        Trusted Healthcare Platform
                    </p>

                    <h1 className="
                        text-5xl
                        lg:text-6xl
                        font-bold
                        text-gray-800
                        leading-tight
                    ">
                        Book Appointments
                        With Trusted Doctors
                    </h1>

                    <p className="
                        text-gray-600
                        text-lg
                        mt-6
                        leading-relaxed
                    ">
                        Find experienced specialists,
                        book appointments instantly,
                        and manage your healthcare
                        journey with ease.
                    </p>

                    {/* Buttons */}

                    <div className="
                        flex
                        flex-wrap
                        gap-4
                        mt-8
                    ">

                        <Link
                            to="/doctors"
                            className="
                                bg-blue-600
                                hover:bg-blue-700
                                text-white
                                px-8
                                py-4
                                rounded-xl
                                font-semibold
                                transition
                            "
                        >
                            Find Doctors
                        </Link>

                        <Link
                            to="/register"
                            className="
                                border
                                border-blue-600
                                text-blue-600
                                hover:bg-blue-50
                                px-8
                                py-4
                                rounded-xl
                                font-semibold
                                transition
                            "
                        >
                            Get Started
                        </Link>

                    </div>

                    {/* Stats */}

                    <div className="
                        flex
                        gap-10
                        mt-12
                        flex-wrap
                    ">

                        <div>

                            <h2 className="
                                text-3xl
                                font-bold
                                text-gray-800
                            ">
                                50+
                            </h2>

                            <p className="
                                text-gray-500
                            ">
                                Doctors
                            </p>

                        </div>

                        <div>

                            <h2 className="
                                text-3xl
                                font-bold
                                text-gray-800
                            ">
                                1000+
                            </h2>

                            <p className="
                                text-gray-500
                            ">
                                Patients
                            </p>

                        </div>

                        <div>

                            <h2 className="
                                text-3xl
                                font-bold
                                text-gray-800
                            ">
                                24/7
                            </h2>

                            <p className="
                                text-gray-500
                            ">
                                Support
                            </p>

                        </div>

                    </div>

                </div>

                {/* Right */}

                <div className="
                    flex
                    justify-center
                ">

                    <img
                        src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg"
                        alt="Doctor"
                        className="
                            w-full
                            max-w-lg
                            rounded-3xl
                            shadow-2xl
                        "
                    />

                </div>

            </section>

            {/* Features */}

            <section className="
                max-w-7xl
                mx-auto
                px-6
                py-16
            ">

                <div className="
                    text-center
                    mb-14
                ">

                    <h2 className="
                        text-4xl
                        font-bold
                        text-gray-800
                    ">
                        Why Choose Us
                    </h2>

                    <p className="
                        text-gray-500
                        mt-4
                    ">
                        Experience seamless healthcare
                        booking with powerful features
                    </p>

                </div>

                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-3
                    gap-8
                ">

                    {/* Card 1 */}

                    <div className="
                        bg-white
                        p-8
                        rounded-3xl
                        shadow-md
                        hover:shadow-xl
                        transition
                        text-center
                    ">

                        <div className="
                            text-5xl
                            mb-5
                        ">
                            👨‍⚕️
                        </div>

                        <h3 className="
                            text-2xl
                            font-bold
                            text-gray-800
                        ">
                            Expert Doctors
                        </h3>

                        <p className="
                            text-gray-500
                            mt-4
                        ">
                            Connect with highly qualified
                            specialists across departments.
                        </p>

                    </div>

                    {/* Card 2 */}

                    <div className="
                        bg-white
                        p-8
                        rounded-3xl
                        shadow-md
                        hover:shadow-xl
                        transition
                        text-center
                    ">

                        <div className="
                            text-5xl
                            mb-5
                        ">
                            📅
                        </div>

                        <h3 className="
                            text-2xl
                            font-bold
                            text-gray-800
                        ">
                            Easy Booking
                        </h3>

                        <p className="
                            text-gray-500
                            mt-4
                        ">
                            Book appointments instantly
                            with a simple and smooth process.
                        </p>

                    </div>

                    {/* Card 3 */}

                    <div className="
                        bg-white
                        p-8
                        rounded-3xl
                        shadow-md
                        hover:shadow-xl
                        transition
                        text-center
                    ">

                        <div className="
                            text-5xl
                            mb-5
                        ">
                            ❤️
                        </div>

                        <h3 className="
                            text-2xl
                            font-bold
                            text-gray-800
                        ">
                            Trusted Care
                        </h3>

                        <p className="
                            text-gray-500
                            mt-4
                        ">
                            We focus on providing
                            safe, secure, and trusted
                            healthcare services.
                        </p>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="
                bg-blue-600
                text-white
                py-20
                mt-10
            ">

                <div className="
                    max-w-4xl
                    mx-auto
                    text-center
                    px-6
                ">

                    <h2 className="
                        text-4xl
                        font-bold
                    ">
                        Ready To Book Your Appointment?
                    </h2>

                    <p className="
                        mt-5
                        text-lg
                        text-blue-100
                    ">
                        Start your healthcare journey
                        today with trusted specialists.
                    </p>

                    <Link
                        to="/doctors"
                        className="
                            inline-block
                            mt-8
                            bg-white
                            text-blue-600
                            px-8
                            py-4
                            rounded-xl
                            font-semibold
                            hover:bg-gray-100
                            transition
                        "
                    >
                        Explore Doctors
                    </Link>

                </div>

            </section>

        </div>
    );
}

export default HomePage;