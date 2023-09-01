from rest_framework import serializers
from .models import Survery_response


class SurverySerializer(serializers.ModelSerializer):
    class Meta:
        model = Survery_response
        fields = [
            "id",
            "user_id",
            "height",
            "weight",
            "age",
            "gender",
            "activity_level",
            "dietary_restrictions",
        ]
