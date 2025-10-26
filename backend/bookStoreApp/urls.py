
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, random_books_view
from django.urls import path




router = DefaultRouter()
router.register('books', BookViewSet, basename='books')


urlpatterns = [
    path('books/random/', random_books_view, name='random-books'),
]
urlpatterns += router.urls


