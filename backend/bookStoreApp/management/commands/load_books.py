import json
import os
from django.core.management.base import BaseCommand
from bookStoreApp.models import Book 
from django.utils.dateparse import parse_date

class Command(BaseCommand):
    help = 'Load initial book data from JSON file'

    def handle(self, *args, **options):

        base_dir = os.path.dirname(os.path.abspath(__file__))
        json_path = os.path.join(base_dir, 'nonfiction_books.json')
        json_path = os.path.normpath(json_path)

        with open(json_path, 'r') as file:
            data = json.load(file)

        for item in data:
            book, created = Book.objects.get_or_create(
                title=item['title'],
                defaults={
                    'author': item.get('author', 'Unknown'),
                    'price': item['price'],
                    'isbn_number': item['isbn_number'],
                    'published_date': parse_date(item['published_date']),
                    'category' : item['category']
                }
            )
            if created:
                self.stdout.write(self.style.SUCCESS(f"Added: {book.title}"))
            else:
                self.stdout.write(self.style.WARNING(f"Skipped (already exists): {book.title}"))
