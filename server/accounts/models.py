# accounts/models.py
from django.db import models
from django.contrib.auth.models import AbstractUser

#note it is important to create a custom user in the first server makemigrations/migrate
#saves lots of hassel later in the db and settings

class CustomUser(AbstractUser): #custom user 
    class Meta:
        db_table = 'auth_user' #specifies database column name
