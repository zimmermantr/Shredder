from django.db import models
from user_app.models import App_user
from workout_app.models import Workout

# from workout_app.models import Workout


class Workout_Program(models.Model):
    program_name = models.CharField(max_length=50)
    program_details = models.TextField()
    program_difficulty = models.CharField(max_length=20)
    program_duration = models.CharField(max_length=20)
    frequency_per_week = models.PositiveBigIntegerField()
    workouts = models.ManyToManyField(Workout, related_name="workout_programs")

class User_Workout_Program(models.Model):
    program_id = models.ForeignKey(Workout_Program, related_name="program_copy", on_delete=models.CASCADE)
    user = models.ForeignKey(App_user, related_name="userWorkoutPrograms", on_delete=models.CASCADE)
