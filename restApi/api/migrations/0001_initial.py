# Generated by Django 3.2.8 on 2021-10-15 08:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='New_Records',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
                ('time', models.DateTimeField(null=True)),
                ('date', models.DateField(null=True)),
            ],
        ),
    ]