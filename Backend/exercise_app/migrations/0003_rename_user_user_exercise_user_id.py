# Generated by Django 4.2.4 on 2023-09-06 12:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('exercise_app', '0002_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user_exercise',
            old_name='user',
            new_name='user_id',
        ),
    ]
