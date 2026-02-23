from rest_framework import  viewsets
from .models import Book
from .serializers import BookSerializer
from .services.getData import get_random_books
from rest_framework.response import Response    
from rest_framework.decorators import api_view
from django.shortcuts import render
from django.contrib.auth.models import User
from .models import UserProfile, Address
import logging
from django.contrib.auth import authenticate, login
from oauth2_provider.views.generic import ProtectedResourceView
from django.http import HttpResponse
from .services.oauth_service import backend_login
from .services.oauth_service import backend_logout
from .services.user_exists import user_exists




logger = logging.getLogger("bookStoreApp")


# Create your views here.

def home_view(request):
    return render(request, 'home.html')
    
    
## View to get random books ny given count and category
@api_view(['GET'])
def random_books_view(request, category, count):
    books = get_random_books(count, category)
    
    serializer = BookSerializer(books, many=True, context={'request': request})
    return Response(serializer.data)



# Get book by ID
@api_view(['GET'])
def get_book_by_id(request, book_id):
    try:
        book = Book.objects.get(id=book_id)
    except Book.DoesNotExist:
        return Response({'error': 'Book not found'}, status=404)

    serializer = BookSerializer(book, context={'request': request})

    logger.debug(f"Selected Book data: {serializer.data}")
    return Response(serializer.data)



# View to handle user registration
# can be refactored to seperate logic from here later
@api_view(['POST'])
def process_registration(request):

    if request.method == 'POST':

        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        logger.debug(f"Received registration data: email={email} password={password}")

        if password != confirm_password:
            return Response({'error': 'Passwords do not match'}, status=400)

        user = User.objects.create_user(username=email, email=email)
        user.set_password(password)
        user.save()
        user_profile = UserProfile.objects.create(user=user)
        user_profile.save()

        if request.POST.get("auto_login"):
            
            # authenticate the user
            tokens = backend_login(email, password)
            return Response(tokens, status=201)

        return Response({'message': 'User registered successfully'}, status=201)



# View to handle user login
@api_view(['POST'])
def login_view(request):

    email = request.POST.get('email')
    password = request.POST.get('password')

    tokens  = backend_login(email, password)

    logger.debug(f"Received tokens: {tokens} in login_view")
    return Response(tokens, status=200)


@api_view(['POST'])
def logout_view(request):

    token = request.POST.get('token')

    response = backend_logout(token)

    logger.debug(f"Logout response: {response.status_code} - {response.text} in logout_view")

    return Response({'message': 'User logged out successfully'}, status=200)




## If user with given email exist return positive 200 else negative 404
@api_view(['POST'])
def check_user_exists(request):

    if ( user_exists( request.POST.get('email') ) ):
        print('status=200')
        return Response(status=200)
    else:
        return Response(status=404)



# View to get and add new address for user
@api_view(['GET', 'POST'])
def fetch_and_add_address(request):

    # if request is GET fetch user addresses and return
    if request.method == 'GET':

        user = request.user
        addresses = Address.objects.filter(user=user).order_by('last_used')
        serializer = AddressSerializer(addresses, many=True)

        return Response(serializer.data, status=200)


    # if request is POST add new address for user
    if request.method == 'POST':

        user = request.user
        street = request.POST.get('street')
        city = request.POST.get('city')
        state = request.POST.get('state')
        zip_code = request.POST.get('zip_code')
        country = request.POST.get('country')

        address = Address.objects.create(
            user=user,
            street=street,
            city=city,
            state=state,
            zip_code=zip_code,
            country=country
        )

        address.save()

        return Response({'message': 'Address added successfully'}, status=200)




# View to update existing address for user
@api_view(['PUT'])
def update_address(request, id):

    user = request.user
    street = request.POST.get('street')
    city = request.POST.get('city')
    state = request.POST.get('state')
    zip_code = request.POST.get('zip_code')
    country = request.POST.get('country')

    try:
        address = Address.objects.get(id=id)
    except Address.DoesNotExist:
        return Response({'error': 'Address not found'}, status=404)

    address.street = street
    address.city = city
    address.state = state
    address.zip_code = zip_code
    address.country = country
    address.save()

    return Response({'message': 'Address updated successfully'}, status=200)



