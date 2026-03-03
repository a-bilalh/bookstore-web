import axios from 'axios';
import { API_BASE_URL } from '../../config';
import styles from './InputShippingAddress.module.css';
import { useEffect, useState } from 'react';


export default function InputShippingAddress( { action, id, setShowAddressForm, address } ) {

    

    const [addressData, setAddressData] = useState({
        full_name: "",
        phone_number: "",
        street_address: "",
        city: "",
        state: "",
        zip_code: "",
        country: ""
    });
    


    useEffect( () => {


        if ( action === "edit" ) {
            setAddressData({
                full_name: address.full_name || "",
                phone_number: address.phone || "",
                street_address: address.street || "",
                city: address.city || "",
                state: address.state || "",
                zip_code: address.zip_code || "",
                country: address.country || ""
            });
        }

      } , [action, address] );


      console.log("Address data in input shipping address component", addressData);








    async function handleSubmit(e) {

        e.preventDefault();

        // Form Data
        const form = e.target;
        const formData = new FormData(form);


        try {

          let response;
          
            // Send request to the following endpoint and get the response
            if ( action === "add") {
               response = await axios.post(`${API_BASE_URL}/api/addresses/`, formData, {
                headers : {
                    Authorization: `Bearer ${localStorage.getItem('access')}`
                } 
              
              });
              console.log( "response statuss in input shipping address component", response.status);


            } else {
              response = await axios.put(`${API_BASE_URL}/api/addresses/${id}`, formData, {
                headers : {
                    Authorization: `Bearer ${localStorage.getItem('access')}`
                } 
              });
            }
            
        

            // when response is successful 
            if ( response.status === 200 ) {
                alert("Shipping Address Saved Successfully")
                setShowAddressForm(false);
            }


        } catch (error) {
            console.log("Error saving shipping address, please try again")
        }

      }







    return (

        <div className={styles.mainContainer}>
          
          <h2>{action} new shipping address</h2>

            <form onSubmit={handleSubmit} className={styles.formContainer}>

              <label>
                Full Name:
                <input type="text" name="full_name" value={addressData.full_name}
                       onChange={(e) => setAddressData({...addressData, full_name: e.target.value})} />

              </label>

              <label>
                Phone Number:
                <input type="text" name="phone_number" value={addressData.phone_number}
                       onChange={(e) => setAddressData({...addressData, phone_number: e.target.value})} />
              </label>
                
              <label>
                Street Address: 
                <input type="text" name="street_address" value={addressData.street_address}
                       onChange={(e) => setAddressData({...addressData, street_address: e.target.value})} />
              </label>

              <label>
                City:
                <input type="text" name="city" value={addressData.city}
                       onChange={(e) => setAddressData({...addressData, city: e.target.value})} />
              </label>

              <label>
                State:
                <input type="text" name="state" value={addressData.state}
                       onChange={(e) => setAddressData({...addressData, state: e.target.value})} />
              </label>

              <label>
                Zip Code:
                <input type="text" name="zip_code" value={addressData.zip_code}
                       onChange={(e) => setAddressData({...addressData, zip_code: e.target.value})} />
              </label>

              <label>
                Country:
                <input type="text" name="country" value={addressData.country}
                       onChange={(e) => setAddressData({...addressData, country: e.target.value})} />
              </label>

              <button type="submit">Save</button>

          </form>

        </div>
    )



}