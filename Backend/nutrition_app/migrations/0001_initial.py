# Generated by Django 4.2.4 on 2023-09-06 15:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('meal', models.CharField(max_length=255)),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='foods', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Measurement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.PositiveBigIntegerField(default=0)),
                ('unit_name', models.CharField()),
            ],
        ),
        migrations.CreateModel(
            name='Nutrient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('measurement_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='nutrient_measurements', to='nutrition_app.measurement')),
            ],
        ),
        migrations.CreateModel(
            name='Ingredient',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('amount_consumed', models.PositiveBigIntegerField(default=0)),
                ('food_id', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='ingredients', to='nutrition_app.food')),
                ('measurement_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ingredient_measurements', to='nutrition_app.measurement')),
                ('nutrients_id', models.ManyToManyField(related_name='nutrients', to='nutrition_app.nutrient')),
            ],
        ),
    ]
