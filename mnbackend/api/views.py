from rest_framework import generics
from .serializers import PostSerializer
from post.models import Post

class PostList(generics.ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(user=user).order_by('-created')