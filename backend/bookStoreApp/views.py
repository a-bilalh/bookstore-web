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


logger = logging.getLogger("bookStoreApp")


# Create your views here.

def home_view(request):
    return render(request, 'home.html')
    
    
## View to get random books ny given count and category
@api_view(['GET'])
def random_books_view(request, category, count):
    books = get_random_books(count, category)
    logger.debug(f"These should be {count} books from database: {books}")
    
    serializer = BookSerializer(books, many=True, context={'request': request})
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

    if request.method == 'POST':

        email = request.POST.get('email')
        password = request.POST.get('password')
        logger.debug(f"Received login data: email={email} password={password}")
        
        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            return Response({'message': 'User logged in successfully'}, status=200)
        else:
            return Response({'error': 'Invalid email or password'}, status=401)