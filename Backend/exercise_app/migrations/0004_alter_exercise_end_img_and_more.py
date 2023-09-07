# Generated by Django 4.2.4 on 2023-09-06 21:14

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('exercise_app', '0003_rename_user_user_exercise_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='exercise',
            name='end_img',
            field=models.CharField(null=True),
        ),
        migrations.AlterField(
            model_name='exercise',
            name='secondary_muscle',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='exercise',
            name='start_img',
            field=models.CharField(null=True),
        ),
        migrations.AlterField(
            model_name='user_exercise',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='userExercises', to=settings.AUTH_USER_MODEL),
        ),
    ]
