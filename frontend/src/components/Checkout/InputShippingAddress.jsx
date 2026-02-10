


export default function InputShippingAddress( { action } ) {

    return (

        <div>
          
          <h2>{action}</h2>

            <form>

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



          </form>

        </div>
    )



}