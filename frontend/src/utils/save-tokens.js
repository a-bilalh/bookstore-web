





// Helper function to save token to localStorage
export default function saveToken(token) {
    if (!token) {
        localStorage.removeItem("access");
    } else {
        localStorage.setItem("access", token);
    }
}