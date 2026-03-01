import { useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";



export default async function fetchUserAddresses() {


    try {

        console.log("Tokens in fetch user addresses", localStorage.getItem('access'), localStorage.getItem('refresh'));

        const token = localStorage.getItem('access');

        if ( !token ) {
            console.log("No access token found.");
        }

        const response = await axios.get(`${API_BASE_URL}/api/addresses/`, {
            headers : {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
        
    } catch (error) {

        console.log("Fetch failed: ", error.response?.status);
        throw error;

    }
    
} 


