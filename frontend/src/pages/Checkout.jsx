import { useState } from "react";
import EmailInput from "../components/Checkout/EmailInput";
import useAuth from "../contexts/AuthContext"
import PasswordInput from "../components/Checkout/PasswordInput";




export default function Checkout() {

  
    
  const [userHasAccount, setUserHasAccount] = useState(false);
  const [checkoutSteps, setCheckoutSteps] = useState("step1");
  const { isLoggedIn, handleLogout, handleSetTokens } = useAuth();


    return (

    <div>
      

      { 
        checkoutSteps === "step1" && 
        <EmailInput setUserHasAccount={setUserHasAccount}
                    setCheckoutSteps={setCheckoutSteps}
        /> 
      }


      {
        userHasAccount && 
        checkoutSteps === "step2" && 
        <PasswordInput setCheckoutSteps={setCheckoutSteps} />
        
      }

      {

      }


    </div>
    
    );
}