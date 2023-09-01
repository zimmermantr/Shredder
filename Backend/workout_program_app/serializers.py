from rest_framework.serializers import ModelSerializer
from .models import Workout_Program
from workout_app.serializers import WorkoutSerializer

class WorkoutProgramSerializer(ModelSerializer):
    workouts = WorkoutSerializer(many=True)
    class Meta:
        model = Workout_Program
        fields = ['id', 'program_name', 'program_details', 'program_difficulty', 'program_duration', 'frequency_per_week', 'user', 'workouts']