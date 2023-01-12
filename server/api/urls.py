from django.urls import path
from . import views

urlpatterns = [
path('posts/', views.GetAllPosts.as_view()),
path('posts/<int:pk>',views.PostRetrieveUpdateDestroy.as_view()),
path('posts/<int:pk>/sold',views.PostToggleSold.as_view()),
]