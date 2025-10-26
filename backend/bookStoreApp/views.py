from rest_framework import  viewsets
from .models import Book
from .serializers import BookSerializer
from .services.getData import get_random_books
from rest_framework.response import Response    
from rest_framework.decorators import api_view


# Create your views here.
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    
    
## View to get random books
@api_view(['GET'])
def random_books_view(request):
    books = get_random_books(count=10)
    print("These should be 10 books from database:", books)
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)