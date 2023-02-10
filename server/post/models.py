from django.db import models
from accounts.models import CustomUser

# have learned so much in django, when trying to change fields from the client side
# make sure you are edititng the fields and not properties
# after many many days on the problem finally understood the problem
# the differences, it is good to struggle with porblems best way 
# to learn. I kept trying to change the user below when it should have been 
# the userkey as that is a field and user is a property

class Post(models.Model):
    #foriegn keys
    userkey = models.ForeignKey(CustomUser, on_delete=models.CASCADE) 

    #properties
    title = models.CharField(max_length=100,blank=True)
    image= models.FileField(upload_to='files/', null=True, verbose_name="",blank=True) #image field
    price = models.IntegerField(default=0,blank=True)
    description = models.TextField(blank=True)
    likes = models.IntegerField(default=0)
    tags = models.CharField(max_length=30,blank=True,default="tag1,tag2,...") #sqlite doesnt support arrays
    date_modified = models.DateTimeField(auto_now=True,blank=True)
    created = models.DateTimeField(auto_now_add=True,blank=True)
    sold = models.BooleanField(default=False,blank=True)

    @property
    def user(self):
        return self.userkey.username
        
    @property
    def datejoined(self):
        return self.userkey.date_joined

    def __str__(self):
        return self.title
