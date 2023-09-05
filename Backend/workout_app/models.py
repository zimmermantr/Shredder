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
    created_by = models.ForeignKey(App_user, on_delete=models.CASCADE)

class User_Workout(models.Model):
    workout_id = models.ForeignKey(Workout, on_delete=models.CASCADE)
    user = models.ForeignKey(App_user, related_name="user_workouts", on_delete=models.CASCADE)