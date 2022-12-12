from django.db import models

# Create your models here.
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.utils.crypto import get_random_string

class UserManager(BaseUserManager):
    def _create_user(self, user_id, username, email, name,last_name, password, dni):
        user = self.model(
            user_id = user_id,
            username = username,
            email = email,
            name = name,
            last_name = last_name,
            dni = dni,
            token = token
           # is_superuser = is_superuser,
           # **extra_fields
        )
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self, username, email, name,last_name, password=None):
        return self._create_user(username, email, name, last_name, password)

    def create_superuser(self, username, email, name,last_name, password=None):
        return self._create_user(username, email, name,last_name, password)

class User(AbstractBaseUser, PermissionsMixin):
    
    token_rand = get_random_string(length=30)
    
    
    # Atributos
    user_id = models.IntegerField()
    username = models.CharField(max_length = 255, unique = True)
    email = models.EmailField('Correo Electrónico',max_length = 255, unique = True,)
    name = models.CharField('Nombres', max_length = 255, blank = True, null = True)
    last_name = models.CharField('Apellido', max_length = 255, blank = True, null = True)
    image = models.ImageField('Imagen de perfil', upload_to='perfil/', max_length=255, null=True, blank = True)
    dni = models.IntegerField('Dni', max_length = 8, null = True, blank= True)
    token = models.CharField('Token', value = token_rand, max_lenght = 30, unique = True)
    #token = get_random_string(length=30)
    is_active = models.BooleanField(default = True)
    #objects = UserManager()

    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email','name','last_name']

    def __str__(self):
        return f'{self.name} {self.last_name}'