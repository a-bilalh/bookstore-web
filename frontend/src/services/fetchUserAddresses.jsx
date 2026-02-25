import { useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";



export default async function fetchUserAddresses() {


    try {

        console.log("Tokens in fetch user addresses", localStorage.getItem('access'), localStorage.getItem('refresh'));

        const response = await axios.get(`${API_BASE_URL}/api/addresses/`, {
            headers : {
                Authorization: `Bearer ${localStorage.getItem('access')}`
            }
        });

        if ( response.status === 200 ) {
        return response.data;
        } 
    } catch (error) {
        console.log("Error fetching user addresses, please try again");

    }
    
} 


