from django.urls import path
from . import views



urlpatterns = [
path('posts/', views.GetAllPosts.as_view()), #GET all posts in database
path('posts/<int:pk>',views.GetSinglePost.as_view()), 
path('creatorAllPosts/<str:user>',views.CreatorAllPosts.as_view()),
path('createPost/',views.CreatePost.as_view()),
#path('posts/<int:pk>',views.PostRetrieveUpdateDestroy.as_view()), 
#path('posts/<int:pk>/sold',views.PostToggleSold.as_view()), #mark posts as sold
path('signup/',views.signup),
path('login/',views.login),
]