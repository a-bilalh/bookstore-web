


export default function RegistrationForm() {


    async function submistFormRegistration(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        try{
            const response = await axios.post('/api/register/', formData);
            console.log("Registration successful:", response.data);
            if (response.status === 201) {
                alert("Registration successful! Please log in.");
            } else {
                alert("Registration failed. Please try again.");
            }

        } catch (error) {
            console.error("Error during registration:", error);     
        }
    }

    return (
        <>
            <h1> Registration Form </h1>
            <form action={submistFormRegistration}>
                <input type="text" name="email" placeholder="Email Address" /><br/>
                <input type="password" name="password" placeholder="Password" /><br/>
                <input type="password" name="confirm_password" placeholder="Confirm Password" /><br/>
                <button type="submit">Register</button>
            </form>
        </>
    )
}
