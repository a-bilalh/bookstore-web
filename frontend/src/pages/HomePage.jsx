
export default function Home() {

    const[showRegistrationForm, setShowRegistrationForm] = useState(false);
    const[showLoginForm, setShowLoginForm] = useState(false);



        
    return (
        <>
            <Header />
            <MyHorizontalList category={"fiction"} count={10}/>
            <MyHorizontalList category={"nonfiction"} count={10}/>

            {showRegistrationForm && <RegistrationForm
                        closeRegister={() => setShowRegistrationForm(false)} LoginForm={LoginForm} />}
            {showLoginForm && <LoginForm closeLogin={() => setShowLoginForm(false)} />}
        </>
    )

}