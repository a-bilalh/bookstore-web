from django.test import TestCase
from ..models import Book

# Create your tests here.
class BookModelTest(TestCase):
    
    
    @classmethod
    def setUpTestData(cls):
        # Set up non-modified objects used by all test methods
        cls.object = Book.objects.create(title="Test Book", author="Author Name", price=10.00, 
                                         published_date="2023-01-01",isbn_number="1234567890123", 
                                         pages=100, language="English")
        
        
    def test_title_content(self):
        #test the title content of the book is created correctly
        self.assertEqual(self.object.title, "Test Book")
        
    
    def test_author_content(self):
        #test the author content of the book is created correctly
        self.assertEqual(self.object.author, "Author Name")
        
    
    def test_price_content(self):
        #test the price content of the book is created correctly
        self.assertEqual(self.object.price, 10.00)
        
    
    def test_isbn_number_content(self):
        #test the isbn_number content of the book is created correctly
        self.assertEqual(self.object.isbn_number, "1234567890123")
        
    def test_pages_content(self):
        #test the pages content of the book is created correctly
        self.assertEqual(self.object.pages, 100)
        
    
    def test_language_content(self):
        #test the language content of the book is created correctly
        self.assertEqual(self.object.language, "English")
        
    
    def test_str_method(self):
        #test the __str__ method of the book model
        self.assertEqual(str(self.object), "Test Book")
        
    
    def test_book_count(self):
        #test the number of books in the database
        book_count = Book.objects.count()
        self.assertEqual(book_count, 1)
        