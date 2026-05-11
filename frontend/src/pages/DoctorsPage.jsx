import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

import { getDoctors } from "../services/doctorService";
import { bookAppointment } from "../services/appointmentService";

function DoctorsPage() {

    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);

    const [department, setDepartment] = useState("All");

    const [selectedDoctor, setSelectedDoctor] =
        useState(null);

    const [patientName, setPatientName] =
        useState("");

    const [appointmentDate, setAppointmentDate] =
        useState("");

    const [selectedSlot, setSelectedSlot] =
        useState("");

    const [search, setSearch] = useState("");

    useEffect(() => {

        const fetchDoctors = async () => {

            try {

                const token =
                    localStorage.getItem("token");

                const data =
                    await getDoctors(token);

                setDoctors(data);
                setFilteredDoctors(data);

            }
            catch (error) {

                console.log(error);

            }
        };

        fetchDoctors();

    }, []);

    const handleFilter = (dept) => {

        setDepartment(dept);

        if (dept === "All") {

            setFilteredDoctors(doctors);

        }
        else {

            const filtered = doctors.filter(
                (doctor) =>
                    doctor.specialization === dept
            );

            setFilteredDoctors(filtered);
        }
    };

    const searchedDoctors =
        filteredDoctors.filter((doctor) =>
            doctor.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    const handleConfirmBooking =
        async () => {

        if (
            !patientName ||
            !appointmentDate ||
            !selectedSlot
        ) {

            alert("Please fill all fields");

            return;
        }

        try {

            const token =
                localStorage.getItem("token");

            const response =
                await bookAppointment(
                    {
                        patientName,
                        doctorId:
                            selectedDoctor._id,
                        appointmentDate,
                        slot: selectedSlot
                    },
                    token
                );

            alert(response.message);

            setSelectedDoctor(null);

            setPatientName("");
            setAppointmentDate("");
            setSelectedSlot("");

            window.location.reload();

        }
        catch (error) {

            console.log(error);

            if (error.response) {

                alert(
                    error.response.data.message
                );

            }
            else {

                alert("Booking failed");
            }
        }
    };

    return (

        <div className="
            min-h-screen
            bg-gradient-to-br
            from-blue-50
            to-white
        ">

            <Navbar />

            <div className="
                max-w-7xl
                mx-auto
                px-6
                py-10
            ">

                {/* Header */}

                <div className="
                    flex
                    flex-col
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                    gap-6
                    mb-10
                ">

                    <div>

                        <h1 className="
                            text-5xl
                            font-bold
                            text-gray-800
                        ">
                            Find Your Doctor
                        </h1>

                        <p className="
                            text-gray-500
                            mt-3
                            text-lg
                        ">
                            Book appointments with
                            trusted healthcare specialists
                        </p>

                    </div>

                    <div className="
                        flex
                        flex-col
                        sm:flex-row
                        gap-4
                    ">

                        {/* Search */}

                        <input
                            type="text"
                            placeholder="Search doctors..."
                            value={search}
                            onChange={(e) =>
                                setSearch(
                                    e.target.value
                                )
                            }
                            className="
                                px-4
                                py-3
                                rounded-xl
                                border
                                border-gray-300
                                bg-white
                                shadow-sm
                                outline-none
                                focus:ring-2
                                focus:ring-blue-400
                                w-full
                                sm:w-72
                            "
                        />

                        {/* Filter */}

                        <select
                            value={department}
                            onChange={(e) =>
                                handleFilter(
                                    e.target.value
                                )
                            }
                            className="
                                px-4
                                py-3
                                rounded-xl
                                border
                                border-gray-300
                                bg-white
                                shadow-sm
                                outline-none
                                focus:ring-2
                                focus:ring-blue-400
                            "
                        >

                            <option value="All">
                                All Departments
                            </option>

                            <option value="Cardiologist">
                                Cardiologist
                            </option>

                            <option value="Dermatologist">
                                Dermatologist
                            </option>

                            <option value="Neurologist">
                                Neurologist
                            </option>

                        </select>

                    </div>

                </div>

                {/* Booking Modal */}

                {
                    selectedDoctor && (

                        <div className="
                            fixed
                            inset-0
                            bg-black/40
                            flex
                            justify-center
                            items-center
                            z-50
                            px-4
                        ">

                            <div className="
                                bg-white
                                rounded-3xl
                                shadow-2xl
                                w-full
                                max-w-md
                                p-8
                                animate-fadeIn
                            ">

                                <div className="
                                    flex
                                    justify-between
                                    items-center
                                    mb-6
                                ">

                                    <h2 className="
                                        text-3xl
                                        font-bold
                                        text-gray-800
                                    ">
                                        Book Appointment
                                    </h2>

                                    <button
                                        onClick={() =>
                                            setSelectedDoctor(
                                                null
                                            )
                                        }
                                        className="
                                            text-gray-500
                                            hover:text-red-500
                                            text-2xl
                                        "
                                    >
                                        ×
                                    </button>

                                </div>

                                {/* Doctor Info */}

                                <div className="
                                    flex
                                    items-center
                                    gap-4
                                    mb-6
                                ">

                                    <img
                                        src={
                                            selectedDoctor.image ||
                                            "https://cdn-icons-png.flaticon.com/512/387/387561.png"
                                        }
                                        alt={
                                            selectedDoctor.name
                                        }
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

                                        <h3 className="
                                            text-xl
                                            font-semibold
                                        ">
                                            {
                                                selectedDoctor.name
                                            }
                                        </h3>

                                        <p className="
                                            text-blue-600
                                        ">
                                            {
                                                selectedDoctor.specialization
                                            }
                                        </p>

                                    </div>

                                </div>

                                {/* Form */}

                                <div className="
                                    space-y-4
                                ">

                                    <input
                                        type="text"
                                        placeholder="Patient Name"
                                        value={patientName}
                                        onChange={(e) =>
                                            setPatientName(
                                                e.target.value
                                            )
                                        }
                                        className="
                                            w-full
                                            border
                                            rounded-xl
                                            px-4
                                            py-3
                                            outline-none
                                            focus:ring-2
                                            focus:ring-blue-400
                                        "
                                    />

                                    <input
                                        type="date"
                                        value={appointmentDate}
                                        onChange={(e) =>
                                            setAppointmentDate(
                                                e.target.value
                                            )
                                        }
                                        className="
                                            w-full
                                            border
                                            rounded-xl
                                            px-4
                                            py-3
                                            outline-none
                                            focus:ring-2
                                            focus:ring-blue-400
                                        "
                                    />

                                    <select
                                        value={selectedSlot}
                                        onChange={(e) =>
                                            setSelectedSlot(
                                                e.target.value
                                            )
                                        }
                                        className="
                                            w-full
                                            border
                                            rounded-xl
                                            px-4
                                            py-3
                                            outline-none
                                            focus:ring-2
                                            focus:ring-blue-400
                                        "
                                    >

                                        <option value="">
                                            Select Slot
                                        </option>

                                        {
                                            selectedDoctor
                                                .availableSlots
                                                ?.map(
                                                    (
                                                        slot,
                                                        index
                                                    ) => (

                                                        <option
                                                            key={index}
                                                            value={slot}
                                                        >
                                                            {slot}
                                                        </option>
                                                    )
                                                )
                                        }

                                    </select>

                                    <button
                                        onClick={
                                            handleConfirmBooking
                                        }
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
                                        Confirm Booking
                                    </button>

                                </div>

                            </div>

                        </div>
                    )
                }

                {/* Doctor Cards */}

                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    gap-8
                ">

                    {
                        searchedDoctors.map(
                            (doctor) => (

                                <div
                                    key={doctor._id}
                                    className="
                                        bg-white
                                        rounded-3xl
                                        shadow-md
                                        hover:shadow-2xl
                                        transition
                                        duration-300
                                        overflow-hidden
                                        border
                                    "
                                >

                                    {/* Top Section */}

                                    <div className="
                                        bg-blue-50
                                        p-6
                                        flex
                                        flex-col
                                        items-center
                                    ">

                                        <img
                                            src={
                                                doctor.image ||
                                                "https://cdn-icons-png.flaticon.com/512/387/387561.png"
                                            }
                                            alt={
                                                doctor.name
                                            }
                                            className="
                                                w-28
                                                h-28
                                                rounded-full
                                                object-cover
                                                border-4
                                                border-white
                                                shadow-md
                                            "
                                        />

                                        <h2 className="
                                            text-2xl
                                            font-bold
                                            text-gray-800
                                            mt-4
                                        ">
                                            {doctor.name}
                                        </h2>

                                        <p className="
                                            text-blue-600
                                            font-medium
                                            mt-1
                                        ">
                                            {
                                                doctor.specialization
                                            }
                                        </p>

                                    </div>

                                    {/* Details */}

                                    <div className="p-6">

                                        <div className="
                                            space-y-3
                                        ">

                                            <p className="
                                                text-gray-600
                                            ">
                                                <span className="
                                                    font-semibold
                                                ">
                                                    Experience:
                                                </span>
                                                {" "}
                                                {
                                                    doctor.experience
                                                } years
                                            </p>

                                            <p className="
                                                text-gray-600
                                            ">
                                                <span className="
                                                    font-semibold
                                                ">
                                                    Rating:
                                                </span>
                                                {" "}
                                                {
                                                    doctor.averageRating || 0
                                                } ⭐
                                            </p>

                                        </div>

                                        {/* Slots */}

                                        <div className="
                                            mt-5
                                        ">

                                            <p className="
                                                font-semibold
                                                text-gray-700
                                                mb-3
                                            ">
                                                Available Slots
                                            </p>

                                            <div className="
                                                flex
                                                flex-wrap
                                                gap-2
                                            ">

                                                {
                                                    doctor.availableSlots
                                                        ?.map(
                                                            (
                                                                slot,
                                                                index
                                                            ) => (

                                                                <span
                                                                    key={index}
                                                                    className="
                                                                        bg-gray-100
                                                                        px-3
                                                                        py-1
                                                                        rounded-full
                                                                        text-sm
                                                                        text-gray-700
                                                                    "
                                                                >
                                                                    {slot}
                                                                </span>
                                                            )
                                                        )
                                                }

                                            </div>

                                        </div>

                                        {/* Button */}

                                        <button
                                            onClick={() =>
                                                setSelectedDoctor(
                                                    doctor
                                                )
                                            }
                                            className="
                                                w-full
                                                mt-6
                                                bg-blue-600
                                                hover:bg-blue-700
                                                text-white
                                                py-3
                                                rounded-xl
                                                font-semibold
                                                transition
                                            "
                                        >
                                            Book Appointment
                                        </button>

                                    </div>

                                </div>
                            )
                        )
                    }

                </div>

                {/* Empty State */}

                {
                    searchedDoctors.length === 0 && (

                        <div className="
                            text-center
                            py-20
                            text-gray-500
                        ">

                            <h2 className="
                                text-3xl
                                font-bold
                            ">
                                No Doctors Found
                            </h2>

                            <p className="mt-3">
                                Try another department
                                or search keyword
                            </p>

                        </div>
                    )
                }

            </div>

        </div>
    );
}

export default DoctorsPage;