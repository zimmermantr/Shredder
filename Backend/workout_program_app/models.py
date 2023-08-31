from django.db import models
from user_app.models import App_user
# from workout_app import Workout

class Workout_Programs(models.Model):
    program_name = models.CharField(max_length=30)
    program_details = models.TextField()
    program_difficulty = models.CharField(max_length=20)
    program_duration = models.CharField(max_length=20)
    frequency_per_week = models.PositiveBigIntegerField()
    
    user = models.ForeignKey(App_user, on_delete=models.CASCADE)
    # workouts = models.ManyToManyField(Workout, related_name='parent_program', on_delete=models.CASCADE)
