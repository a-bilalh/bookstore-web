


export default function DisplayShippingAddress( { address } ) {

    return (

        <div>
            <p>{address.street_address}</p>
            <p>{address.city}, {address.state} {address.zip_code}</p>
        </div>  )



}