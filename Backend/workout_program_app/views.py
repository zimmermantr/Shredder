from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
)
from .serializers import WorkoutProgramSerializer, UserWorkoutProgramSerializer, User_Workout_Program, Workout_Program
from exercise_app.serializers import UserExerciseSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from workout_app.models import User_Workout
from exercise_app.models import User_Exercise
from user_app.models import App_user
# Create your views here.

class User_permissions(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class All_programs(User_permissions):
    def get(self, request):
        programs = UserWorkoutProgramSerializer(request.user.user_programs.order_by("program_name"), many=True)
        return Response(programs.data)
    
    #  Could be used to allow users to create their own workout program, starting as an empty list, and then adding workouts to that list

    # def post(self, request):
    #     a_user = get_object_or_404(App_user, pk=request.user.pk)
    #     new_program = User_Workout_Program(**request.data)
    #     new_program.save()
    #     new_program.user.add(a_user)
    #     a_program = UserWorkoutProgramSerializer(new_program)
    #     return Response(a_program.data, status=HTTP_201_CREATED)
    
    def post(self, request):
        user = request.user
        program_serializer = UserWorkoutProgramSerializer(data=request.data)
        if program_serializer.is_valid():
            program = program_serializer.save()

            # Create User_Workout instances
            if "workouts" in request.data:
                workouts_data = request.data["workouts"]
                workouts = []
                for workout_data in workouts_data:
                    workout_data["parent_program"] = program.pk
                    workout_serializer = UserWorkoutSerializer(data=workout_data)
                    if workout_serializer.is_valid():
                        workout = workout_serializer.save()
                        workouts.append(workout)

                # Set the workouts relationship for the program
                program.workouts.set(workouts)

                # Create User_Exercise instances
                for workout in workouts:
                    if "exercises" in request.data:
                        exercises_data = request.data["exercises"]
                        exercises = []
                        for exercise_data in exercises_data:
                            exercise_data["parent_workout"] = workout.pk
                            exercise_serializer = UserExerciseSerializer(
                                data=exercise_data
                            )
                            if exercise_serializer.is_valid():
                                exercise = exercise_serializer.save()
                                exercises.append(exercise)

                        # Set the exercises relationship for the workout
                        workout.exercises.set(exercises)

                return Response(program_serializer.data, status=HTTP_201_CREATED)
        return Response(
            program_serializer.errors, status=HTTP_400_BAD_REQUEST
        )
    
class A_program(User_permissions):
    def get(self, request, id):
        a_program = UserWorkoutProgramSerializer(get_object_or_404(request.user.user_programs, id=id))
        return Response(a_program.data)

    #  Could be used to allow users to modify the name and details of their workout programs
    # def put(self, request, id):
    #     try:
    #         a_program = get_object_or_404(request.user.user_programs, id=id)
    #         a_program.program_name = request.data.get("program_name")
    #         a_program.program_details = request.data.get("program_details")
    #         a_program.save()
    #         return Response(status=HTTP_204_NO_CONTENT)
    #     except Exception as e:
    #         print(e)
    #         return Response("Something went wrong", status=HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        # user = request.user
        # program = user.workout_programs.get(id=id)
        # user.workout_programs.remove(program.id)

        a_program = get_object_or_404(request.user.user_programs, id=id)
        a_program.workouts.exercises.all().delete()
        a_program.workouts.all().delete()
        a_program.delete()
        return Response(status=HTTP_204_NO_CONTENT)