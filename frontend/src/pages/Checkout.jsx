import { useState } from "react";
import EmailInput from "../components/Checkout/EmailInput";




export default function Checkout() {

    
  const[userHasAccount, setUserHasAccount] = useState(false);




    return (

    <div>
      
      <EmailInput setUserHasAccount/>

    </div>
    
    );
}