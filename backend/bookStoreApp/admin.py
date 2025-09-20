from django.contrib import admin
from .models import Book, Address, UserProfile, Order



# Register your models here.
admin.site.register(Book)
admin.site.register(Order)
admin.site.register(UserProfile)