from rest_framework.serializers import ModelSerializer
from .models import Exercise, User_Exercise

class UserExerciseSerializer(ModelSerializer):

    class Meta:
        model = User_Exercise
        fields = ['id', 'exercise_name', 'force', 'sets', 'reps', 'difficulty', 'equipment', 'instructions', 'primary_muscle', 'secondary_muscle', 'parent_workout', 'start_img', 'end_img']

class ExerciseSerializer(ModelSerializer):

    class Meta:
        model = Exercise
        fields = ['id', 'exercise_name', 'force', 'sets', 'reps', 'difficulty', 'equipment', 'instructions', 'primary_muscle', 'secondary_muscle', 'parent_workout', 'start_img', 'end_img']