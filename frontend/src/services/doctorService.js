import axios from "axios";

const API_URL =
  "http://localhost:5000/api/doctors";

export const getDoctors = async (token) => {

    const response = await axios.get(
        API_URL,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};