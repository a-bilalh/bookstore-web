from django.urls import reverse
from rest_framework.test import APIClient
from ..models import Book

class RestApiTests:
    
    def test_get_books(self):
        response = self.client.get('/api/books/')
        self.assertEqual(response.status_code, 200)
        self.assertIsInstance(response.json(), list)
        
        
        
    def test_get_book_detail(self):
        book = Book.objects.create(title="Detail Test Book", author="Detail Author", price=15.00, 
                                   published_date="2023-02-01", isbn_number="9876543210123", 
                                   pages=150, language="English")
        response = self.client.get(f'/api/books/{book.id}/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()['title'], "Detail Test Book")