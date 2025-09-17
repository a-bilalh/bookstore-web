from django.db import models
from django.contrib.auth.models import User




# Create your models here.

# User modeL
class CustomUser(models.Model):
    
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.username
    
    
    
    
# Book model
class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2, default=0.00)
    published_date = models.DateField()
    isbn_number = models.CharField(max_length=13, unique=True)
    pages = models.IntegerField()
    cover_image = models.URLField(blank=True, null=True)
    language = models.CharField(max_length=30)

    def __str__(self):
        return self.title