import RegistrationForm from "../components/RegistrationForm";
import MyHorizontalList from "../components/BooksRowDisplay.jsx";
import LoginForm from "../components/LoginForm.jsx";
import Label from "../components/SectionLabel.jsx";

// temporary removed from header 
/*
    const[showRegistrationForm, setShowRegistrationForm] = useState(false);
    const[showLoginForm, setShowLoginForm] = useState(false);
    const[accessToken, setAccessToken] = useState( localStorage.getItem("access") || null );  // remove this 


    const isLoggedIn = accessToken !== null;

    const handleLogin = () => {
        setShowLoginForm(true);
        setShowRegistrationForm(false);
    }

    const handleRegistration = () => {
        setShowRegistrationForm(true);
        setShowLoginForm(false);
    }

    const handleLogout = async() => {
        await Logout( setAccessToken );
    }



*/



export default function Home() {

    return (
        <>
            <Label type="fiction" children="Fiction" />
            <MyHorizontalList category={"fiction"} count={10}/>

            <Label type="nonfiction">Non Fiction</Label>
            <MyHorizontalList category={"nonfiction"} count={10}/>

        </>
    )

}