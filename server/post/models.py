from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=100)
    image= models.FileField(upload_to='files/', null=True, verbose_name="") #image field
    price = models.IntegerField(default=0)
    description = models.TextField(blank=True)
    likes = models.IntegerField(default=0)

    #sqlite doesnt support arrays will need to use some coding magic to handle this in the front end
    tags = models.CharField(max_length=30,blank=False,default="tag1,tag2,...") 

    created = models.DateTimeField(auto_now_add=True)
    sold = models.BooleanField(default=False)

    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
