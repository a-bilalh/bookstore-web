
from django.core.management.base import BaseCommand
from pathlib import Path
from django.conf import settings



"""
Commands for importing book data via CSV files.
"""
class Command(BaseCommand):

    help = 'Import books descriptions from a CSV file'


    def add_arguments(self, parser):
        parser.add_argument(
            'input_path',
            type=str,
            help='Path to the CSV file to import book descriptions from',
            default=self.import_file_path
        )

    def handle(self, *args, **options):
        base_dir = Path(settings.BASE_DIR)
        relative_path = options['input_path']
        file_path = base_dir / relative_path

        import_books_from_csv(file_path=file_path)