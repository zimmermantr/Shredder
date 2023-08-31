from django.db import models
from workout_app.models import Workout
from django.core import validators as v

# Create your models here.
class Exercise(models.Model):
    exercise_name = models.CharField(max_length=30)
    force = models.CharField(max_length=10)
    sets = models.BigIntegerField(default=3, validators=[v.MaxValueValidator(5), v.MinValueValidator(1)]) #maybe char? 3-5?
    reps = models.BigIntegerField(default=10, validators=[v.MaxValueValidator(1000), v.MinValueValidator(1)]) #maybe char? 8-12?
    difficulty = models.CharField(max_length=12)
    equipment = models.CharField(max_length=20)
    instructions = models.TextField(max_length=500)
    primary_muscle = models.CharField()
    secondary_muscle = models.TextField(null=True)
    parent_workout = models.ManyToManyField(Workout, related_name="exercises", blank=True)
    start_img = models.CharField(null=True)
    end_img = models.CharField(null=True)

    def __str__(self):
        return f"{self.exercise_name}"
