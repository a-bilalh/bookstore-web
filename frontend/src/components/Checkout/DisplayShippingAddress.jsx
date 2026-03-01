


export default function DisplayShippingAddress( { address } ) {

    return (

        <div>
            <p>{address.street}</p>
            <p>{address.city}, {address.state} {address.zip_code}</p>
        </div>  )



}