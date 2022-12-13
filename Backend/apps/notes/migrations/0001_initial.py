from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    operations = [
        migrations.CreateModel(
            name='Notes',
            fields=[
                ('id',models.BigAutoField(auto_created=True, primary_key= True , serialize=False , verbose_name='Note_id')),
                ('title',models.CharField(max_length=15, verbose_name='Titulo')),
                ('description',models.CharField(max_length=300, verbose_name='Descripcion')),
                ('condition',models.CharField(max_length=12, choices=[('1','En proceso'), ('2','Pendiente'), ('3','Finalizado')], verbose_name='Estado')),
                ('creation_date',models.DateTimeField(auto_now_add=True, verbose_name='Fecha creacion')),
                ('close date',models.DateTimeField(auto_now=True, verbose_name='fecha cierre')) 
            ]
        )
    ]