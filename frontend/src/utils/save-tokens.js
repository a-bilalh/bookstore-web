



// Helper function to save token to localStorage
export default function saveToken(key, token) {
    if (!token) {
        localStorage.removeItem(key);
    } else {
        localStorage.setItem(key, token);
    }
}