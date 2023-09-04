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

from .models import Survey_response
from .serializers import SurveySerializer
from user_app.models import App_user


class User_Survey(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    # Creates an instance of Survey_response class when user inputs their information
    def post(self, request):
        request.data["user"] = request.user.id
        a_survey = SurveySerializer(data=request.data)
        if a_survey.is_valid():
            a_survey.save()
            return Response(a_survey.data, status=HTTP_201_CREATED)
        return Response(a_survey.errors, status=HTTP_400_BAD_REQUEST)
        # try:
        # print(request.user.id)
        # user_id = request.data.get("user_id")
        # app_user = App_user.objects.get(pk=user_id)
        # new_survey = Survey_response(user_id=app_user, **request.data)
        # new_survey.save()
        # serialized_survey = SurveySerializer(new_survey)

        # return Response(serialized_survey.data, status=HTTP_201_CREATED)
        # except App_user.DoesNotExist:
        #     return Response(
        #         {"error": "App_user with that id does not exist"},
        #         status=HTTP_400_BAD_REQUEST,
        #     )

        # except Exception as e:
        #     return Response({"error": str(e)}, status=HTTP_400_BAD_REQUEST)


class A_Survey(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    # Allows users to update their survey response information and save it
    def put(self, request, id):
        try:
            a_survey = get_object_or_404(request.user.survey_response, id=id)
            serializer = SurveySerializer(a_survey, data=request.data)
            if serialize.is_valid():
                a_survey.save()
                return Response(status=HTTP_204_NO_CONTENT)
            else:
                return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
        except Exception as e:
            print(e)
            return Response("Something went wrong", status=HTTP_400_BAD_REQUEST)
