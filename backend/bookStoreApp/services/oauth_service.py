import requests




def backend_login(email, password):

    data = {
        'grant_type': 'password',
        'username': email,
        'password': password,
        'client_id': 'your_client_id',
        'client_secret': 'your_client_secret',
    }

    response =  requests.post('http://localhost:8000/o/token/', data=data)
    return response.json()