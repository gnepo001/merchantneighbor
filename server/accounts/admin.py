from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser
#from django.contrib.auth import get_user_model

#CustomUser = get_user_model()

# Register your models here.

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    # list_display = [
    #     "email",'username','is_superuser'
    # ]

admin.site.register(CustomUser, CustomUserAdmin)