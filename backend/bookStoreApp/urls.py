
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, random_books_view, home_view
from django.urls import path, re_path, include
from django.views.generic import TemplateView




router = DefaultRouter()
router.register('books', BookViewSet, basename='books')


urlpatterns = [

    path('books/random/<str:category>/<int:count>', random_books_view, name='random-books'), # TODO: This url has been changed
    path('', home_view, name='home_view'),
    path('', include( router.urls ) ),
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),      # TODO: this path needs to be confirmed

]
