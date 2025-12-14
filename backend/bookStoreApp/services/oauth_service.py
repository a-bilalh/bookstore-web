import requests
import logging
from dotenv import load_dotenv
import os

logger = logging.getLogger("bookStoreApp")


load_dotenv()
oauth_client_id = os.getenv("oauth_client_id")
oauth_client_id_secret = os.getenv("oauth_client_id_secret")

def backend_login(email, password):

    data = {
        'grant_type': 'password',
        'username': email,
        'password': password,
        'client_id': oauth_client_id,
        'client_secret': oauth_client_id_secret,
    }

    response =  requests.post('http://localhost:8000/o/token/', data=data)  
    return response.json()