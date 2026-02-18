import useState, { useEffect } from 'react';
import fetchUserAddresses from '../../services/fetchUserAddresses';



export default function ManageShippingAddress() {

    const[addresses, setAddresses] = useState([]);


    useEffect( () => {

        async function fetchAddress()  {
            const addressesData = await fetchUserAddresses();
            setAddresses(addressesData);
        };

        fetchAddress();

     } , []);

    return (

        <div>
            <h5>Shipping Address</h5>
            <button>change</button>
        </div>

    );

}