from django.db import models
from user_app.models import App_user
from workout_program_app.models import Workout_Program, User_Workout_Program

# Create your models here.


class Workout(models.Model):
    workout_name = models.CharField()
    workout_details = models.TextField()
    # exercises, linked to Exercise
    parent_program = models.ManyToManyField(
        Workout_Program, related_name="workouts", blank=True
    )

    def __str__(self):
        return f"{self.workout_name}"

class User_Workout(models.Model):
    workout_name = models.CharField()
    user = models.ManyToManyField(App_user, related_name="user_workouts", blank=True)
    workout_details = models.TextField(blank=True)
    #exercises, linked to Exercise
    parent_program = models.ManyToManyField(User_Workout_Program, related_name="workouts", blank=True)