# Generated by Django 4.2.4 on 2023-09-04 15:29

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('workout_app', '0002_remove_workout_app_user_workout_parent_program_and_more'),
        ('exercise_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User_Exercise',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exercise_name', models.CharField(max_length=30)),
                ('force', models.CharField(max_length=10)),
                ('sets', models.BigIntegerField(default=3, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)])),
                ('reps', models.BigIntegerField(default=10, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(1)])),
                ('difficulty', models.CharField(max_length=12)),
                ('equipment', models.CharField(max_length=20)),
                ('instructions', models.TextField(max_length=500)),
                ('primary_muscle', models.CharField()),
                ('secondary_muscle', models.TextField(null=True)),
                ('start_img', models.CharField(null=True)),
                ('end_img', models.CharField(null=True)),
                ('parent_workout', models.ManyToManyField(blank=True, related_name='exercises', to='workout_app.user_workout')),
            ],
        ),
    ]
