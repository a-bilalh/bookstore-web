from rest_framework import serializers
from .models import Book
from django.contrib.auth.models import User
from .models import UserProfile


class BookSerializer(serializers.ModelSerializer):
    cover_image = serializers.ImageField(max_length=None, allow_empty_file=False, use_url=True)
    
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'published_date', 'isbn_number', 'cover_image']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = UserProfile
        fields = ['user', 'address', 'phone_number']