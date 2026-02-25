



// Helper function to save token to localStorage
export default function saveToken(key, token) {

    // console.log(`In save token function, before saving:  key is ${key} and token is ${token}`);
    // console.log('In save token function, before saving token, token value in storage is: ', localStorage.getItem(key));


    if (!token) {
        localStorage.removeItem(key);
    } else {
        localStorage.setItem(key, token);

    
    }

    // console.log('In save token function, after saving token, token value in storage is: ', localStorage.getItem(key));
}