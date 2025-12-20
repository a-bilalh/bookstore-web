
from rest_framework.routers import DefaultRouter
from .views import random_books_view, home_view
from django.urls import path, re_path, include
from django.views.generic import TemplateView
from .views import process_registration
from .views import login_view
from .views import logout_view
from .views import get_book_by_id
import logging



urlpatterns = [

    path('books/<int:book_id>/', get_book_by_id, name='book-by-id'),
    path('books/random/<str:category>/<int:count>/', random_books_view, name='random-books'),
    path('register/', process_registration, name='register'),
    path('login/', login_view, name='login_view'), # TODO: New url for user login; untested
    path('logout/', logout_view, name='logout_view'), # TODO: New url for user logout; untested
    path('', home_view, name='home_view'),

]
