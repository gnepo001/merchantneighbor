from rest_framework import serializers
from post.models import Post

class PostSerializer(serializers.ModelSerializer):
    created = serializers.ReadOnlyField()
    sold = serializers.ReadOnlyField()

    class Meta:
        model = Post
        fields = ['id','title','description','created','sold']