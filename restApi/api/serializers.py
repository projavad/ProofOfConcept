from rest_framework import serializers
from api.models import New_Record
 
class NewRecordsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = New_Record
        fields = ('name', 'time')