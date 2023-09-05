from django.db import models
from user_app.models import App_user
from django.core import validators as v
from django.core.exceptions import ValidationError


class Survey_response(models.Model):
    user_id = models.ForeignKey(
        App_user, on_delete=models.CASCADE, related_name="survey_response"
    )
    height = models.BigIntegerField(
        null=False,
    )
    weight = models.BigIntegerField(
        null=False, validators=[v.MinValueValidator(50), v.MaxValueValidator(500)]
    )
    age = models.BigIntegerField(
        null=False, validators=[v.MinValueValidator(6), v.MaxValueValidator(99)]
    )
    gender = models.CharField(null=False, validators=[v.MaxLengthValidator(6)])
    activity_level = models.CharField(null=False)
    dietary_restrictions = models.CharField(null=True)
    created = models.DateTimeField(auto_now_add=True)
