import {useState, useEffect } from 'react';
import fetchUserAddresses from '../../services/fetchUserAddresses';
import InputShippingAddress from './InputShippingAddress';




export default function ManageShippingAddress() {

    // state to store user addresses
    const [addresses, setAddresses] = useState([]);

    // state to trace if user is adding a new address 
    const [showAddressForm, setShowAddressForm] = useState(false);

    // state to store number of addresses displayed to the user, default is 5
    const [numberOfAddressesDispalyed, setNumberOfAddressesDisplayed] = useState(5);

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

            { numberOfAddresses === 0 && <button onClick={() => setShowAddressForm(true)}>add new address</button>}
            { numberOfAddresses > 0 && <button>change</button> }


            { numberOfAddresses > numberOfAddressesDispalyed && <button>show more</button>}

            { showAddressForm && <InputShippingAddress action="add" setShowAddressForm={setShowAddressForm} />}

            {}

        </div>

    );

}