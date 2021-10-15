from django.db import models

class New_Record(models.Model):
    name = models.CharField(max_length=60)
    time = models.DateTimeField(null=True)
 
    def __str__(self):
        return self.name 