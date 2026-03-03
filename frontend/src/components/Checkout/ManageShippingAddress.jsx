import {useState, useEffect } from 'react';
import fetchUserAddresses from '../../services/fetchUserAddresses';
import InputShippingAddress from './InputShippingAddress';
import DisplayShippingAddress from './DisplayShippingAddress';
import styles from "./ManageShippingAddress.module.css";




export default function ManageShippingAddress() {

    // state to store user addresses
    const [addresses, setAddresses] = useState([]);

    // state to trace if user is adding a new address 
    const [showAddressForm, setShowAddressForm] = useState(false);

    // state to trace if user is editing an address
    const [showEditAddressForm, setShowEditAddressForm] = useState(false);

    // state to store the selected shipping address
    const [selectedAddress, setSelectedAddress] = useState(null);

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
            { numberOfAddresses > 0 && <button onClick={() => setShowEditAddressForm(true)}>change</button> }


            { numberOfAddresses > numberOfAddressesDispalyed && <button onClick={() => setNumberOfAddressesDisplayed(numberOfAddressesDispalyed + 5)}>show more</button>}

            { showAddressForm && <InputShippingAddress action="add" setShowAddressForm={setShowAddressForm} />}
            { showEditAddressForm && <InputShippingAddress action="edit" id={selectedAddress} 
                                                           setShowAddressForm={setShowEditAddressForm}
                                                           address = {addresses.find( (address) => address.id === selectedAddress )}
                                                           
                                                           />}

            {addresses.slice(0, numberOfAddressesDispalyed).map( 

                (address) => ( 
                    <label className={styles.addressDisplay}>

                        <input type="radio" 
                               name="shipping_address"
                               value={address.id}
                               key={address.id}
                               checked={selectedAddress === address.id}
                               onChange={() => setSelectedAddress(address.id)}

                        />

                        <DisplayShippingAddress address={address} />

                    </label>
                
                 )
            )}

        </div>

    );

}