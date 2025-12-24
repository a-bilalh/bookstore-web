from rest_framework import  viewsets
from .models import Book
from .serializers import BookSerializer
from .services.getData import get_random_books
from rest_framework.response import Response    
from rest_framework.decorators import api_view
from django.shortcuts import render
from django.contrib.auth.models import User
from .models import UserProfile
import logging
from django.contrib.auth import authenticate, login
from oauth2_provider.views.generic import ProtectedResourceView
from django.http import HttpResponse
from .services.oauth_service import backend_login
from .services.oauth_service import backend_logout




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
