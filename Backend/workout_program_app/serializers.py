from rest_framework.serializers import ModelSerializer
from .models import Workout_Program, User_Workout_Program
from workout_app.serializers import WorkoutSerializer, UserWorkoutSerializer, User_Workout
from exercise_app.models import User_Exercise

class UserWorkoutProgramSerializer(ModelSerializer):
    workouts = UserWorkoutSerializer(many=True)
    class Meta:
        model = User_Workout_Program
        fields = ['id', 'program_name', 'program_details', 'program_difficulty', 'program_duration', 'frequency_per_week', 'workouts']

    # def create(self, validated_data):
    #     # Remove the "user" key from validated_data to prevent it from being used to create the instance
    #     user = validated_data.pop('user', None)
    #     instance = User_Workout_Program.objects.create(**validated_data)

    #     # Now, if "user" was provided, add it to the ManyToMany field
    #     if user:
    #         instance.user.set(user)

    #     # Continue with creating workouts and exercises as needed
    #     workouts_data = validated_data.get('workouts', [])
    #     print(workouts_data)
    #     for workout_data in workouts_data:
    #         exercises_data = workout_data.pop('exercises', [])
    #         print(exercises_data)
    #         workout = User_Workout.objects.create(parent_program=instance, **workout_data)

    #         for exercise_data in exercises_data:
    #             User_Exercise.objects.create(parent_workout=workout, **exercise_data)

    #     return instance

class WorkoutProgramSerializer(ModelSerializer):
    workouts = WorkoutSerializer(many=True)
    class Meta:
        model = Workout_Program
        fields = ['id', 'program_name', 'program_details', 'program_difficulty', 'program_duration', 'frequency_per_week', 'workouts']