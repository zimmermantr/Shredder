# Generated by Django 4.2.4 on 2023-09-13 14:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('exercise_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Workout',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('workout_name', models.CharField()),
                ('workout_details', models.TextField()),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='custom_workouts', to=settings.AUTH_USER_MODEL)),
                ('exercises', models.ManyToManyField(blank=True, related_name='workouts', to='exercise_app.exercise')),
            ],
        ),
        migrations.CreateModel(
            name='User_Workout',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='userWorkouts', to=settings.AUTH_USER_MODEL)),
                ('workout_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='workout_copy', to='workout_app.workout')),
            ],
        ),
    ]
