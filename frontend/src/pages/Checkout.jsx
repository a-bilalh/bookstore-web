import { useState } from "react";
import EmailInput from "../components/Checkout/EmailInput";
import { LogIn } from "lucide-react";
import LoginForm from "../components/LoginForm";
import useAuth from "../contexts/AuthContext"




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
        <LoginForm handleSetTokens={handleSetTokens}
                   setCheckoutSteps={setCheckoutSteps}
        />
      }

      {
        
      }


    </div>
    
    );
}