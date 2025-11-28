


export default function RegistrationForm() {


    async function submistFormRegistration(formData) {
        formData.preventDefault();

        try{
            const response = await axios.post('/api/register/', formData);
            console.log("Registration successful:", response.data);

        } catch (error) {
            console.error("Error during registration:", error);     
        }
    }

    return (
        <>
            <h1> Registration Form </h1>
            <form action={submistFormRegistration}>
                <input type="text" placeholder="Email Address" /><br/>
                <input type="password" placeholder="Password" /><br/>
                <input type="password" placeholder="Confirm Password" /><br/>
                <button type="submit">Register</button>
            </form>
        </>
    )
}
