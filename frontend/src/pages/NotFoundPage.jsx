import { Link } from "react-router-dom";

function NotFoundPage() {

    return (

        <div className="
            min-h-screen
            flex
            flex-col
            items-center
            justify-center
            bg-gray-100
            text-center
            px-6
        ">

            <h1 className="
                text-8xl
                font-bold
                text-blue-600
            ">
                404
            </h1>

            <h2 className="
                text-3xl
                font-semibold
                mt-4
                text-gray-800
            ">
                Page Not Found
            </h2>

            <p className="
                text-gray-500
                mt-3
            ">
                The page you are looking for
                does not exist.
            </p>

            <Link
                to="/"
                className="
                    mt-6
                    bg-blue-600
                    hover:bg-blue-700
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    transition
                "
            >
                Go Back Home
            </Link>

        </div>
    );
}

export default NotFoundPage;