from rest_framework.serializers import ModelSerializer
from .models import Workout, User_Workout
from exercise_app.serializers import ExerciseSerializer, UserExerciseSerializer, User_Exercise

class UserWorkoutSerializer(ModelSerializer):
    exercises = UserExerciseSerializer(many=True)
    class Meta:
        model = User_Workout
        fields = ['id', 'workout_name', 'user', 'workout_details', 'exercises', 'parent_program']
        
    # def create(self, validated_data):
    #     # Remove the "user" key from validated_data to prevent it from being used to create the instance
    #     user = validated_data.pop('user', None)
    #     instance = User_Workout.objects.create(**validated_data)

    #     # Now, if "user" was provided, add it to the ManyToMany field
    #     if user:
    #         instance.user.set(user)

    #     # Continue with creating exercises as needed
    #     exercises_data = validated_data.get('exercises', [])
    #     for exercise_data in exercises_data:
    #         User_Exercise.objects.create(parent_workout=instance, **exercise_data)

    #     return instance

class WorkoutSerializer(ModelSerializer):
    exercises = ExerciseSerializer(many=True)
    class Meta:
        model = Workout
        fields = ['id', 'workout_name', 'workout_details', 'exercises', 'parent_program']