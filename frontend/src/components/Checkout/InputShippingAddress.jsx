


export default function InputShippingAddress( { action } ) {

    
  
    async function handleSubmit(e) {

        e.preventDefault();

        // Form Data
        const form = e.target;
        const formData = new FormData(form);

        try {

            // Send request to the following endpoint and get the response
            const response = await axios.post(`${API_BASE_URL}/api/addresses/`, formData);

            // when response is successful 
            if ( response.status === 200 ) {
                alert("Shipping Address Saved Successfully")
            }


        } catch (error) {
            console.log("Error saving shipping address, please try again")
        }

      }







    return (

        <div>
          
          <h2>{action}</h2>

            <form onSubmit={handleSubmit}>

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

              <button type="submit">Save</button>

          </form>

        </div>
    )



}