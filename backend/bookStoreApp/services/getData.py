from bookStoreApp.models import Book
import random
import logging

logger = logging.getLogger("bookStoreApp")
## function that get random books from database


def get_random_books(count, category):
    logger.info(f"Getting {count} random books from category: {category}")
    filtered_books_ids = Book.objects.filter(category=category) 
    random_books = random.sample(list(filtered_books_ids), min(count, len(filtered_books_ids)))

    return random_books


    """
    all_books_ids = Book.objects.values_list('id', flat=True)
    print("All book IDs in database:", list(all_books_ids))
    random_ids = random.sample(list(all_books_ids), min(count, len(all_books_ids)))
    print("Selected random book IDs:", random_ids)
    return Book.objects.filter(id__in=random_ids)
    """