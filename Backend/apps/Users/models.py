from django.db import models

# Create your models here.
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.utils.crypto import get_random_string

class Usermanagger(BaseUserManager):
    def create_user(self,email,username,name,last_name,password=None):
        if not email:
            raise ValueError('El usuario debe tener un correo electronico')

        user= self.model(
            username = username,
            email = self.normalize_email(email),
            name= name,
            last_name = last_name
        )
    
        user.set_password(password)
        user.save()
        return user

class User(AbstractBaseUser):
    # Atributos
    username = models.CharField(max_length = 255, unique = True)
    email = models.EmailField('Correo Electrónico',max_length = 255, unique = True,)
    name = models.CharField('Nombres', max_length = 255, blank = True, null = True)
    last_name = models.CharField('Apellido', max_length = 255, blank = True, null = True)
    #token = get_random_string(length=30)
    objects= Usermanagger()
    
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return f'{self.name} {self.last_name}'
    
    def has_perm(self,perm,obj=None):
        return True

    def has_module_perm(self,app_label):
        return True

