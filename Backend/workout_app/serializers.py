from rest_framework.serializers import ModelSerializer
from .models import Workout, User_Workout
from exercise_app.serializers import ExerciseSerializer, UserExerciseSerializer

class UserWorkoutSerializer(ModelSerializer):
    exercises = UserExerciseSerializer(many=True)
    class Meta:
        model = User_Workout
        fields = ['id', 'workout_name', 'app_user', 'workout_details', 'exercises', 'parent_program']

class WorkoutSerializer(ModelSerializer):
    exercises = ExerciseSerializer(many=True)
    class Meta:
        model = Workout
        fields = ['id', 'workout_name', 'workout_details', 'exercises', 'parent_program']