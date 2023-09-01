from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.serializers import serialize
from django.shortcuts import get_object_or_404
import json
from rest_framework.status import (
    HTTP_204_NO_CONTENT,
    HTTP_201_CREATED,
    HTTP_404_NOT_FOUND,
    HTTP_200_OK,
    HTTP_400_BAD_REQUEST,
)
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

from .models import Survery_response
from .serializers import SurverySerializer


class User_Survey(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    # Creates an instance of Survey_response class when user inputs their information
    def post(self, request):
        request.data["app_user"] = request.user
        new_survey = Survery_response(**request.data)
        new_survey.save()
        serialized_survey = SurverySerializer(new_survey)
        return Response(serialized_survey.data, status=HTTP_201_CREATED)


class A_Survey(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    # Allows users to update their survey response information and save it
    def put(self, request, id):
        try:
            a_survey = get_object_or_404(request.user.survey_response, id=id)
            serializer = SurverySerializer(a_survey, data=request.data)
            if serialize.is_valid():
                a_survey.save()
                return Response(status=HTTP_204_NO_CONTENT)
            else:
                return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
            return Response("Something went wrong", status=HTTP_400_BAD_REQUEST)
