from bookStoreApp.models import Book
import random



## function that get random books from database
def get_random_books(count=10):
    
    all_books_ids = Book.objects.values_list('id', flat=True)
    random_ids = random.sample(list(all_books_ids), min(count, len(all_books_ids)))
    return Book.objects.filter(id__in=random_ids)
