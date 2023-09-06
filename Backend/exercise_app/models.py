from django.db import models
from django.core import validators as v
from user_app.models import App_user

# Create your models here.
class Exercise(models.Model):
    exercise_name = models.CharField(max_length=50)
    force = models.CharField(max_length=10)
    sets = models.BigIntegerField(default=3, validators=[v.MaxValueValidator(5), v.MinValueValidator(1)]) #maybe char? 3-5?
    reps = models.BigIntegerField(default=10, validators=[v.MaxValueValidator(100), v.MinValueValidator(1)]) #maybe char? 8-12?
    difficulty = models.CharField(max_length=12)
    equipment = models.CharField(max_length=20)
    instructions = models.TextField(max_length=5000)
    primary_muscle = models.CharField()
    secondary_muscle = models.TextField(null=True)
    start_img = models.CharField(null=True)
    end_img = models.CharField(null=True)
    created_by = models.ForeignKey(App_user, on_delete=models.CASCADE)


class User_Exercise(models.Model):
    user_id = models.ForeignKey(App_user, related_name="userExercises", on_delete=models.CASCADE)
    exercise_id = models.ForeignKey(Exercise, on_delete=models.CASCADE)