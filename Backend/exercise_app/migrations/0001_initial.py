# Generated by Django 4.2.4 on 2023-09-05 22:03

import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Exercise',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exercise_name', models.CharField(max_length=50)),
                ('force', models.CharField(max_length=10)),
                ('sets', models.BigIntegerField(default=3, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(1)])),
                ('reps', models.BigIntegerField(default=10, validators=[django.core.validators.MaxValueValidator(100), django.core.validators.MinValueValidator(1)])),
                ('difficulty', models.CharField(max_length=12)),
                ('equipment', models.CharField(max_length=20)),
                ('instructions', models.TextField(max_length=5000)),
                ('primary_muscle', models.CharField()),
                ('secondary_muscle', models.TextField(blank=True)),
                ('start_img', models.CharField(blank=True)),
                ('end_img', models.CharField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='User_Exercise',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('exercise_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='exercise_app.exercise')),
            ],
        ),
    ]
