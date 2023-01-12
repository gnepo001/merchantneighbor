from rest_framework import generics, permissions
from .serializers import PostSerializer, PostToggleSoldSerializer
from post.models import Post

class GetAllPosts(generics.ListAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Post.objects.all().order_by('-created')

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