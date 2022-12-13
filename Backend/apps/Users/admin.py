from django.contrib import admin

#models
from apps.Users.models import User

# Register your models here.
admin.site.register(User)