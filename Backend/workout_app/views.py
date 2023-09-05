from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
)
from .serializers import WorkoutSerializer, Workout, User_Workout, UserWorkoutSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
# Create your views here.

class User_permissions(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class All_workouts(User_permissions):
    def get(self, request, program_id):
        workouts = UserWorkoutSerializer(request.user.user_workouts.order_by("workout_name"), many=True)
        return Response(workouts.data)
    
    def post(self, request, program_id):
        user = request.user
        if id:
            a_program = get_object_or_404(request.user.user_programs, id=program_id)
        new_workout = User_Workout(**request.data)
        new_workout.save()
        
        a_workout = UserWorkoutSerializer(new_workout)
        # a_workout.user.add([user])
        # a_workout.parent_program.add()
        return Response(a_workout.data, status=HTTP_201_CREATED)
    
class A_workout(User_permissions):
    def get(self, request, workout_id, program_id):
        a_workout = UserWorkoutSerializer(get_object_or_404(request.user.user_workouts, id=id))
        return Response(a_workout.data)

    def put(self, request, program_id, workout_id):
        try:
            a_workout = get_object_or_404(request.user.user_workouts, id=id)
            a_workout.workout_name = request.data.get("workout_name")
            a_workout.workout_details = request.data.get("workout_details")
            a_workout.save()
            return Response(status=HTTP_204_NO_CONTENT)
        except Exception as e:
            print(e)
            return Response("Something went wrong", status=HTTP_400_BAD_REQUEST)

    def delete(self, request,  workout_id):
        a_workout = get_object_or_404(request.user.user_workouts, id=id)
        a_workout.exercises.all().delete()
        a_workout.delete()
        return Response(status=HTTP_204_NO_CONTENT)