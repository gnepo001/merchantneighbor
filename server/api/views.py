from rest_framework import generics, permissions
from .serializers import PostSerializer, PostToggleSoldSerializer
from post.models import Post

from django.db import IntegrityError
from accounts.models import CustomUser
from rest_framework.parsers import JSONParser
from rest_framework.authtoken.models import Token 
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate

######## Return // Post Data ###########
#GET NON-AUTH
class GetAllPosts(generics.ListAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Post.objects.all().order_by('-created')

class GetSinglePost(generics.ListAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Post.objects.filter(pk=self.kwargs['pk']) #get url parameters
    # def get_queryset(self):
    #     return Post.objects.filter(pk=6)

# class PostListCreate(generics.ListCreateAPIView):
#     serializer_class = PostSerializer
#     #permission_classes = [permissions.IsAuthenticatedOrReadOnly]

#     def get_queryset(self):
#         user = self.request.user
#         return Post.objects.filter(user=user).order_by('-created')

#     def perform_create(self,serializer):
#         serializer.save(user=self.request.user)

# class PostRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = PostSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user
#         return Post.objects.filter(user=user)

# class PostToggleSold(generics.UpdateAPIView):
#     serializer_class = PostToggleSoldSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user
#         return Post.objects.filter(user=user)

#     def perform_update(self,serializer):
#         serializer.instance.sold = not(serializer.instance.sold)
#         serializer.save()

## Create Post needs auth

class CreatePost(generics.CreateAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self,serializer):
        # userkey was the user in my code, struggled so much to find this error.
        # so much research but I learned alot
        serializer.save(userkey = self.request.user) 

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            data = JSONParser().parse(request)
            user = CustomUser.objects.create_user(
                username=data['email'],
                password = data['password']
            )
            user.save() #creates user to server/database

            token = Token.objects.create(user=user) #creates token for auth
            return JsonResponse({'token':str(token)},status=201) #returns token to client side can be stored via local storage
        except IntegrityError:
            return JsonResponse({'error':'username taken. CHoose another username'},status=400)

@csrf_exempt
def login(request):
    if request.method == "POST":
        data = JSONParser().parse(request) 
        user = authenticate(
            request,
            username=data['email'],
            password=data['password'])
        if user is None:
            return JsonResponse({'error':'unable to login. check username and password'},status=400)
        else: # return user token
            try:
                token = Token.objects.get(user=user)
                email = data['email'] #collect email send to client
            except: # if token not in db, create a new one
                token = Token.objects.create(user=user)
            #returns data dict with token and email
            return JsonResponse({'token':str(token),'email':str(email)}, status=201)