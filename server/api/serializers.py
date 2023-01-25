from rest_framework import serializers
from post.models import Post

class PostSerializer(serializers.ModelSerializer):
    created = serializers.ReadOnlyField()
    sold = serializers.ReadOnlyField()

    class Meta:
        model = Post
        fields = ['id','user','datejoined','title','likes','image','description','created','date_modified','price','sold','tags']

class PostToggleSoldSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id'] # why need to show id?
        read_only_fields = ['title','image','description','created','sold']