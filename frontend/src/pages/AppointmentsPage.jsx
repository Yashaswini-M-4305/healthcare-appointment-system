import { useEffect, useState }
from "react";

import Navbar
from "../components/Navbar";

import {
    getAppointments,
    cancelAppointment
}
from "../services/appointmentService";

function AppointmentsPage() {

    const [appointments,
        setAppointments] =
        useState([]);

    const [loading,
        setLoading] =
        useState(true);

    useEffect(() => {

        fetchAppointments();

    }, []);

    const fetchAppointments =
        async () => {

        try {

            const token =
                localStorage.getItem(
                    "token"
                );

            const data =
                await getAppointments(
                    token
                );

            setAppointments(data);

        }
        catch (error) {

            console.log(error);

        }
        finally {

            setLoading(false);

        }
    };

    const handleCancel =
        async (id) => {

        try {

            const token =
                localStorage.getItem(
                    "token"
                );

            const response =
                await cancelAppointment(
                    id,
                    token
                );

            alert(response.message);

            fetchAppointments();

        }
        catch (error) {

            console.log(error);

            alert(
                "Failed to cancel appointment"
            );
        }
    };

    return (

        <div className="
            min-h-screen
            bg-gray-100
        ">

            <Navbar />

            <div className="
                max-w-6xl
                mx-auto
                px-6
                py-12
            ">

                <div className="
                    flex
                    justify-between
                    items-center
                    mb-10
                ">

                    <div>

                        <h1 className="
                            text-4xl
                            font-bold
                            text-gray-800
                        ">
                            My Appointments
                        </h1>

                        <p className="
                            text-gray-500
                            mt-2
                        ">
                            Manage your booked
                            appointments
                        </p>

                    </div>

                </div>

                {/* Loading */}

                {
                    loading && (

                        <div className="
                            text-center
                            py-20
                            text-gray-500
                            text-xl
                        ">
                            Loading appointments...
                        </div>
                    )
                }

                {/* Empty State */}

                {
                    !loading &&
                    appointments.length === 0 && (

                        <div className="
                            bg-white
                            rounded-3xl
                            shadow-md
                            p-12
                            text-center
                        ">

                            <div className="
                                text-7xl
                                mb-6
                            ">
                                📅
                            </div>

                            <h2 className="
                                text-3xl
                                font-bold
                                text-gray-800
                            ">
                                No Appointments Yet
                            </h2>

                            <p className="
                                text-gray-500
                                mt-4
                            ">
                                Your booked
                                appointments
                                will appear here.
                            </p>

                        </div>
                    )
                }

                {/* Appointment Cards */}

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-8
                ">

                    {
                        appointments.map(
                            (appointment) => (

                                <div
                                    key={
                                        appointment._id
                                    }
                                    className="
                                        bg-white
                                        rounded-3xl
                                        shadow-md
                                        p-8
                                        hover:shadow-xl
                                        transition
                                    "
                                >

                                    <div className="
                                        flex
                                        items-start
                                        justify-between
                                        gap-4
                                    ">

                                        <div className="
                                            flex
                                            gap-5
                                        ">

                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
                                                alt="Doctor"
                                                className="
                                                    w-20
                                                    h-20
                                                    rounded-full
                                                    object-cover
                                                    border-4
                                                    border-blue-100
                                                "
                                            />

                                            <div>

                                                <h2 className="
                                                    text-2xl
                                                    font-bold
                                                    text-gray-800
                                                ">
                                                    Dr.
                                                    {" "}
                                                    {
                                                        appointment.doctorId?.name
                                                        || "Doctor"
                                                    }
                                                </h2>

                                                <p className="
                                                    text-blue-600
                                                    font-medium
                                                    mt-1
                                                ">
                                                    {
                                                        appointment.doctorId?.specialization
                                                        || "Specialist"
                                                    }
                                                </p>

                                                <div className="
                                                    mt-4
                                                    space-y-2
                                                    text-gray-600
                                                ">

                                                    <p>
                                                        <span className="
                                                            font-semibold
                                                        ">
                                                            Patient:
                                                        </span>
                                                        {" "}
                                                        {
                                                            appointment.patientName
                                                        }
                                                    </p>

                                                    <p>
                                                        <span className="
                                                            font-semibold
                                                        ">
                                                            Date:
                                                        </span>
                                                        {" "}
                                                        {
                                                            appointment.appointmentDate
                                                        }
                                                    </p>

                                                    <p>
                                                        <span className="
                                                            font-semibold
                                                        ">
                                                            Slot:
                                                        </span>
                                                        {" "}
                                                        {
                                                            appointment.slot
                                                        }
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                        <span className="
                                            bg-green-100
                                            text-green-700
                                            px-4
                                            py-2
                                            rounded-full
                                            text-sm
                                            font-semibold
                                        ">
                                            Confirmed
                                        </span>

                                    </div>

                                    {/* Buttons */}

                                    <div className="
                                        flex
                                        gap-4
                                        mt-8
                                    ">

                                        <button
                                            onClick={() =>
                                                handleCancel(
                                                    appointment._id
                                                )
                                            }
                                            className="
                                                bg-red-500
                                                hover:bg-red-600
                                                text-white
                                                px-5
                                                py-3
                                                rounded-xl
                                                font-semibold
                                                transition
                                            "
                                        >
                                            Cancel
                                        </button>

                                    </div>

                                </div>
                            )
                        )
                    }

                </div>

            </div>

        </div>
    );
}

export default AppointmentsPage;