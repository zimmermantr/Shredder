from rest_framework.serializers import ModelSerializer
from .models import App_user
from exercise_app.serializers import UserExerciseSerializer
from workout_app.serializers import UserWorkoutSerializer
from workout_program_app.serializers import UserWorkoutProgramSerializer


class UserSerializer(ModelSerializer):
    userWorkoutPrograms = UserWorkoutProgramSerializer(many = True)
    userWorkouts = UserWorkoutSerializer(many=True) 
    userExercises = UserExerciseSerializer(many=True)

    class Meta:
        model = App_user
        fields = ['id', 'email', 'userWorkoutPrograms', 'userWorkouts', 'userExercises']


class UserOnlySerializer(ModelSerializer):
    class Meta:
        model = App_user
        fields = ['id', 'email']
