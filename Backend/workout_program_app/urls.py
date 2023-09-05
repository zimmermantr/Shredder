from django.urls import path, include
from .views import All_programs, A_program

urlpatterns = [
    path('', All_programs.as_view()),
    path('<int:program_id>/', A_program.as_view()),
    path('<int:program_id>/workouts/', include('workout_app.urls')),
    # path('<int:id>/workouts/<int:id>/exercises/', include('workout_app.urls','exercise_app.urls'))
]