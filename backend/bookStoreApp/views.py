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
    
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)

