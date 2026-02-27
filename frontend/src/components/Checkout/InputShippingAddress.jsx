import axios from 'axios';
import { API_BASE_URL } from '../../config';
import styles from './InputShippingAddress.module.css';


export default function InputShippingAddress( { action, id } ) {

    

    async function handleSubmit(e) {

        e.preventDefault();

        // Form Data
        const form = e.target;
        const formData = new FormData(form);

        console.log(" checking user tokens in input shipping address component", localStorage.getItem('access'), localStorage.getItem('refresh'));


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
                <input type="text" name="full_name" />
              </label>

              <label>
                Phone Number:
                <input type="text" name="phone_number" />
              </label>
                
              <label>
                Street Address: 
                <input type="text" name="street_address" />
              </label>

              <label>
                City:
                <input type="text" name="city" />
              </label>

              <label>
                State:
                <input type="text" name="state" />
              </label>

              <label>
                Zip Code:
                <input type="text" name="zip_code" />
              </label>

              <label>
                Country:
                <input type="text" name="country" />
              </label>

              <button type="submit">Save</button>

          </form>

        </div>
    )



}