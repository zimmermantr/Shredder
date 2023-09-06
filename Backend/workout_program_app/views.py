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
        programs = UserWorkoutProgramSerializer(request.user.userWorkoutPrograms.order_by("program_id"), many=True)
        return Response(programs.data)

    def post(self, request):
        user = get_object_or_404(App_user, pk=request.user.pk)
        program_id = request.data.get("program_id")
        existing_program = user.userWorkoutPrograms.filter(program_id=program_id).first()
        if not existing_program:
            program = get_object_or_404(Workout_Program, pk=program_id)
            new_user_program = User_Workout_Program(program_id=program, user=user)
            new_user_program.save()
            serializer = UserWorkoutProgramSerializer(new_user_program)
            return Response(serializer.data, status=HTTP_201_CREATED)
        else:
            return Response("You already have this program added.", status=HTTP_204_NO_CONTENT)

    
class A_program(User_permissions):
    def get(self, request, id):
        a_program = UserWorkoutProgramSerializer(get_object_or_404(request.user.userWorkoutPrograms, id=id))
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

        a_program = get_object_or_404(request.user.userWorkoutPrograms, id=id)
        a_program.delete()
        return Response(status=HTTP_204_NO_CONTENT)
