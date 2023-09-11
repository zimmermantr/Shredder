# Generated by Django 4.2.4 on 2023-09-08 16:43

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Survey_response',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('height', models.BigIntegerField()),
                ('weight', models.BigIntegerField(validators=[django.core.validators.MinValueValidator(50), django.core.validators.MaxValueValidator(500)])),
                ('age', models.BigIntegerField(validators=[django.core.validators.MinValueValidator(6), django.core.validators.MaxValueValidator(99)])),
                ('gender', models.CharField(validators=[django.core.validators.MaxLengthValidator(6)])),
                ('activity_level', models.CharField()),
                ('dietary_restrictions', models.CharField(null=True)),
                ('created', models.DateTimeField(auto_now_add=True, null=True)),
            ],
        ),
    ]
