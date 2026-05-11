import axios from "axios";

const API_URL =
    "http://localhost:5000/api/appointments";

/* Book Appointment */

export const bookAppointment =
    async (appointmentData, token) => {

    const response =
        await axios.post(
            API_URL,
            appointmentData,
            {
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

    return response.data;
};

/* Get My Appointments */

export const getAppointments =
    async (token) => {

    const response =
        await axios.get(
            API_URL,
            {
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

    return response.data;
};

/* Cancel Appointment */

export const cancelAppointment =
    async (id, token) => {

    const response =
        await axios.delete(
            `${API_URL}/${id}`,
            {
                headers: {
                    Authorization:
                        `Bearer ${token}`
                }
            }
        );

    return response.data;
};