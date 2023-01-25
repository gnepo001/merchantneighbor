from django.db import models
from accounts.models import CustomUser

class Post(models.Model):
    #foriegn keys
    userkey = models.ForeignKey(CustomUser, on_delete=models.CASCADE) 

    #properties
    title = models.CharField(max_length=100)
    image= models.FileField(upload_to='files/', null=True, verbose_name="") #image field
    price = models.IntegerField(default=0)
    description = models.TextField(blank=True)
    likes = models.IntegerField(default=0)
    tags = models.CharField(max_length=30,blank=False,default="tag1,tag2,...") #sqlite doesnt support arrays
    date_modified = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)
    sold = models.BooleanField(default=False)

    @property
    def user(self):
        return self.userkey.username

    @property
    def datejoined(self):
        return self.userkey.date_joined

    def __str__(self):
        return self.title
