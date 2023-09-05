# Generated by Django 4.2.4 on 2023-09-05 21:07

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
            name='Workout_Program',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('program_name', models.CharField(max_length=50)),
                ('program_details', models.TextField()),
                ('program_difficulty', models.CharField(max_length=20)),
                ('program_duration', models.CharField(max_length=20)),
                ('frequency_per_week', models.PositiveBigIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='User_Workout_Program',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('program_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='program_copy', to='workout_program_app.workout_program')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_programs', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
