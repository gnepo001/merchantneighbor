from rest_framework import serializers
from post.models import Post

class PostSerializer(serializers.ModelSerializer):
    created = serializers.ReadOnlyField()
    sold = serializers.ReadOnlyField()

    class Meta:
        model = Post
        fields = ['id','title','description','created','price','sold']

class PostToggleSoldSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id'] # why need to show id?
        read_only_fields = ['title','description','created','sold']