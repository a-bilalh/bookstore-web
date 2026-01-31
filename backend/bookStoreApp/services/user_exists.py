from django.contrib.auth.models import User


# Check to see if user with the given email exists in the database. 
def user_exists( email ):
    return User.objects.filter(email=email).exists()
    