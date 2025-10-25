from rest_framework import serializers
from .models import Book


class BookSerializer(serializers.ModelSerializer):
    cover_image = serializers.ImageField(use_url=True)
    
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'published_date', 'isbn_number', 'cover_image']