from rest_framework import  viewsets
from .models import Book
from .serializers import BookSerializer
from .services.getData import get_random_books
from rest_framework.response import Response    
from rest_framework.decorators import api_view
from django.shortcuts import render
import logging

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
        user_profile = UserProfile.objects.create(user=user)
        user.save()
        return Response({'message': 'User registered successfully'}, status=201)