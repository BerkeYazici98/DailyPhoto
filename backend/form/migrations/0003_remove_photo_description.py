# Generated by Django 4.1.2 on 2022-11-10 14:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0002_entry_tag_remove_photo_project_name_photo_entry_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='photo',
            name='description',
        ),
    ]
