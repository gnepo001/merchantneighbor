from rest_framework import generics, permissions
from .serializers import PostSerializer, PostToggleSoldSerializer
from post.models import Post

from django.db import IntegrityError
from accounts.models import CustomUser
from rest_framework.parsers import JSONParser
from rest_framework.authtoken.models import Token 
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

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

class PostListCreate(generics.ListCreateAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(user=user).order_by('-created')

    def perform_create(self,serializer):
        serializer.save(user=self.request.user)

class PostRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(user=user)

class PostToggleSold(generics.UpdateAPIView):
    serializer_class = PostToggleSoldSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(user=user)

    def perform_update(self,serializer):
        serializer.instance.sold = not(serializer.instance.sold)
        serializer.save()


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

