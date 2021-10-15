from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import NewRecordsSerializer
from .models import New_Record
 
 
class NewRecordViewSet(viewsets.ModelViewSet):
    queryset = New_Record.objects.all().order_by('name')
    serializer_class = NewRecordsSerializer