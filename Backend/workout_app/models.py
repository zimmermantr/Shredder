from django.db import models
from user_app.models import App_user
from workout_program_app.models import Workout_Program

# Create your models here.


class Workout(models.Model):
    workout_name = models.CharField(unique=True)
    app_user = models.ForeignKey(
        App_user, on_delete=models.CASCADE, related_name="user_workouts"
    )
    workout_details = models.TextField()
    # exercises, linked to Exercise
    parent_program = models.ManyToManyField(
        Workout_Program, related_name="workouts", blank=True
    )

    def __str__(self):
        return f"{self.workout_name}"
