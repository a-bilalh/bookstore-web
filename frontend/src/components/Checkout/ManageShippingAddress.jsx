import {useState, useEffect } from 'react';
import fetchUserAddresses from '../../services/fetchUserAddresses';



export default function ManageShippingAddress() {

    const [addresses, setAddresses] = useState([]);

    // number of addresses the user has
    const numberOfAddresses = addresses.length;


    useEffect( () => {

        async function fetchAddress()  {
            const addressesData = await fetchUserAddresses();
            console.log(" fetched addresses data in manage shipping address component", addressesData);
            setAddresses(addressesData);
        };

        fetchAddress();

     } , []);

    

    return (

        <div>

            <h5>Shipping Address</h5>

            { numberOfAddresses > 0 && <button>change</button> }

            <h5>show more</h5>

        </div>

    );

}