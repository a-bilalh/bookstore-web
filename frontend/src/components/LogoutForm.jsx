import axios from "axios";
import { API_BASE_URL } from "../config";




export default async function Logout( {setAccessToken} ) {

    try { 

        const data = new URLSearchParams();
        data.append('refresh', localStorage.getItem("refresh"));

        const response = await axios.post(`${API_BASE_URL}/api/logout/`, data);
        alert("Logout successful!");
        console.log("Logout response:", response.data);
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        setAccessToken(null);

    } catch (error) {
        console.error("Error during logout:", error);
    }

}