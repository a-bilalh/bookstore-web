from pathlib import Path
from django.core.management.base import BaseCommand
from django.conf import settings



"""
Commands for exporting book data via CSV files.
"""
class Command(BaseCommand):
    help = 'Export book fields to a CSV file'

    def add_arguments(self, parser):
        parser.add_argument(
            'output_path',
            type=str,
            help='Path to the CSV file to export book fields to',
            default=self.export_file_path
        )

    def handle(self, *args, **options):
        base_dir = Path(settings.BASE_DIR)
        relative_path = options['output_path']
        file_path = base_dir / relative_path

        export_book_fields_as_csv( book_fields=['id', 'title', 'author'], file_path=file_path )