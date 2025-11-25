
from rest_framework.routers import DefaultRouter
from .views import random_books_view, home_view
from django.urls import path, re_path, include
from django.views.generic import TemplateView
import logging


urlpatterns = [

    path('books/random/<str:category>/<int:count>/', random_books_view, name='random-books'), # TODO: This url has been changed
    path('', home_view, name='home_view'),

]
