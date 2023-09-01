from django.db import models
from user_app.models import App_user
# from workout_app.models import Workout

class Workout_Program(models.Model):
    program_name = models.CharField(max_length=30)
    program_details = models.TextField()
    program_difficulty = models.CharField(max_length=20)
    program_duration = models.CharField(max_length=20)
    frequency_per_week = models.PositiveBigIntegerField()
    
    # workouts = models.ManyToManyField(Workout, related_name='parent_program')

class User_Workout_Program(models.Model):
    program_name = models.CharField(max_length=30)
    program_details = models.TextField()
    program_difficulty = models.CharField(max_length=20)
    program_duration = models.CharField(max_length=20)
    frequency_per_week = models.PositiveBigIntegerField()
    
    user = models.ManyToManyField(App_user, related_name="user_programs")
    # workouts = models.ManyToManyField(Workout, related_name='parent_program')