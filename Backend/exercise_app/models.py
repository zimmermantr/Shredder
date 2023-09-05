from django.db import models
from workout_app.models import Workout, User_Workout
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
    secondary_muscle = models.TextField(blank=True)
    parent_workout = models.ManyToManyField(Workout, related_name="exercises", blank=True)
    start_img = models.CharField(blank=True)
    end_img = models.CharField(blank=True)
    created_by = models.ForeignKey(App_user, on_delete=models.CASCADE, null=True)


class User_Exercise(models.Model):
    exercise_id = models.ForeignKey(Exercise, on_delete=models.CASCADE)
    user = models.ForeignKey(App_user, related_name="user_exercises", on_delete=models.CASCADE)