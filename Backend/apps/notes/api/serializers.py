# Rest imports
from rest_framework import serializers

# Models
from ..models import Notes

# Serializer
class NoteSerializer(serializers.ModelSerializer):

    class Meta:
        model = Notes
        fields = ('__all__')