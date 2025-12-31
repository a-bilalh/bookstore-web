import csv
from bookStoreApp.models import Book




"""
This functions takes the given book fields and export the coresponding values as a CSV file.
"""
def export_book_fields_as_csv( book_fields, file_path ):

    book_values = Book.objects.values(*book_fields)
    with open(file_path, mode='x', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=book_fields)
        writer.writeheader()
        writer.writerows(book_values)


"""
This function imports book descriptions from a CSV file and updates the corresponding Book entries in the database.
"""
# TODO: This function is not efficient for large CSV files. Consider using bulk updates or batch processing for better performance.
def import_books_from_csv(file_path):

    books_ids_descriptions = {}

    # Read CSV file and populate the dictionary
    with open(file_path, mode='r', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            books_ids_descriptions[ row['id'] ] = row['description']

    # Update Book entries in the database
    for id, description in books_ids_descriptions.items():
        row = Book.objects.filter(id=id).update(description=description)
        if row == 0:
            print(f"No book found with id: {id}")
    