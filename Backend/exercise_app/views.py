from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Workout
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST
)
from .serializers import Exercise, User_Exercise ,ExerciseSerializer, UserExerciseSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

# Create your views here.

class User_permissions(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class All_exercises(User_permissions):

    def get(self, request, id):
        return Response(
            UserExerciseSerializer(
                get_object_or_404(request.user.user_workouts, id=id).exercises.order_by("id"), many=True,
            ).data
        )

    def post(self, request, id):
        a_workout = get_object_or_404(request.user.user_workouts, id=id)
        new_exercise = User_Exercise(**request.data)
        new_exercise.save()
        new_exercise.parent_workout.add(a_workout)
        return Response(UserExerciseSerializer(new_exercise).data, status=HTTP_201_CREATED)


class An_exercise(User_permissions):
    
    def get(self, request, id, exercise_id):
        workout = get_object_or_404(request.user.user_workouts, id=id)
        exercise = workout.exercises.get(id=exercise_id)
        return Response(UserExerciseSerializer(exercise).data)

    def put(self, request, id, exercise_id):
        try:
            workout = get_object_or_404(request.user.user_workouts, id=id)
            exercise = workout.exercises.get(id=exercise_id)
            exercise.sets = request.data.get("sets", exercise.sets)
            exercise.reps = request.data.get("reps", exercise.reps)
            exercise.save()
            return Response(status=HTTP_204_NO_CONTENT)
        except Exception as e:
            print(e)
            return Response("something went wrong", status=HTTP_400_BAD_REQUEST)

    def delete(self, request, id, exercise_id):
        workout = get_object_or_404(request.user.user_workouts, id=id)
        exercise = workout.exercises.get(id=exercise_id)
        exercise.delete()
        return Response(status=HTTP_204_NO_CONTENT)