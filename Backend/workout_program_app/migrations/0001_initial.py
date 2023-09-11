# Generated by Django 4.2.4 on 2023-09-08 16:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('workout_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Workout_Program',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('program_name', models.CharField(max_length=50)),
                ('program_details', models.TextField()),
                ('program_difficulty', models.CharField(max_length=20)),
                ('program_duration', models.CharField(max_length=20)),
                ('frequency_per_week', models.CharField(max_length=12)),
                ('created_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('workouts', models.ManyToManyField(blank=True, related_name='workout_programs', to='workout_app.workout')),
            ],
        ),
        migrations.CreateModel(
            name='User_Workout_Program',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('program_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='program_copy', to='workout_program_app.workout_program')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='userWorkoutPrograms', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
