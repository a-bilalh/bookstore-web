import { useState } from "react";
import EmailInput from "../components/Checkout/EmailInput";
import useAuth from "../contexts/AuthContext"
import PasswordInput from "../components/Checkout/PasswordInput";
import UserRegistration from "../components/Checkout/UserRegistration";




export default function Checkout() {

  
    
  const [userHasAccount, setUserHasAccount] = useState(false);
  const [checkoutSteps, setCheckoutSteps] = useState("step1");
  const [email, setEmail] = useState("");
  const { isLoggedIn, handleLogout, handleSetTokens } = useAuth();


    return (

    <div>
      

      { 
        checkoutSteps === "step1" && 
        <EmailInput setUserHasAccount={setUserHasAccount}
                    setCheckoutSteps={setCheckoutSteps}
                    setEmail={setEmail}
        /> 
      }


      {
        userHasAccount && 
        checkoutSteps === "step2" && 
        <PasswordInput setCheckoutSteps={setCheckoutSteps}
                       email={email}
        />
      }


      {
        !userHasAccount && 
        checkoutSteps === "step3" && 
        <UserRegistration email={email} 
                          setCheckoutSteps={setCheckoutSteps}
        />  
      }


    </div>
    


    );
}