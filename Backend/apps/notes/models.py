from django.db import models
from apps.Users.models import User
# Create your models here.

class Notes(models.Model):

    OPERATION_CHOICES =(
        ('1','En proceso'),
        ('2','Pendiente'),
        ('3','Finalizado')
    )

    user_id= models.ForeignKey(
        User,
        null=True,
        on_delete=models.CASCADE,
        verbose_name='id_user'
    )

    title = models.CharField(
        max_length=15,
        verbose_name='Titulo'
    )

    description = models.CharField(
        max_length= 300,
        verbose_name='Descripcion'
    )

    condition = models.CharField(
        max_length=12,
        choices=OPERATION_CHOICES,
        verbose_name='Estado'
    )

    creation_date = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Fecha creacion'
    )

    close_date = models.DateTimeField(
        auto_now=True,
        verbose_name='Fecha cierre'
    )
