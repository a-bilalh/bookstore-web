


export default async function fetchUserAddresses() {

    
    try {

        const response = await axios.get(`${API_BASE_URL}/api/addresses/`);

        if ( response.status === 200 ) {
            return response.data;
        } 
    } catch (error) {
        console.log("Error fetching user addresses, please try again");
        return [];
    }




}