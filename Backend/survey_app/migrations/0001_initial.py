# Generated by Django 4.2.4 on 2023-09-11 16:21

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
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
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='survey_responses', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
