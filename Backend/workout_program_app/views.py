from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_201_CREATED,
    HTTP_204_NO_CONTENT,
    HTTP_400_BAD_REQUEST,
)
from .serializers import Workout_Program, WorkoutProgramSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
# Create your views here.

class User_permissions(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class All_programs(User_permissions):
    def get(self, request):
        programs = WorkoutProgramSerializer(request.user.user_programs.order_by("program_name"), many=True)
        return Response(programs.data)
    
    #  Could be used to allow users to create their own workout program, starting as an empty list, and then adding workouts to that list
    # def post(self, request):
    #     request.data["app_user"] = request.user
    #     new_program = Workout_Program(**request.data)
    #     new_program.save()
    #     a_program = WorkoutProgramSerializer(new_program)
    #     return Response(a_program.data, status=HTTP_201_CREATED)
    
class A_program(User_permissions):
    def get(self, request, id):
        a_program = WorkoutProgramSerializer(get_object_or_404(request.user.user_programs, id=id))
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
        a_program = get_object_or_404(request.user.user_programs, id=id)
        a_program.workouts.exercises.all().delete()
        a_program.workouts.all().delete()
        a_program.delete()
        return Response(status=HTTP_204_NO_CONTENT)