# Rest imports

from ast import Delete, Return
from urllib import request
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Models imports
from notes.models import Notes

# Serializers imports
from notes.api.serializers import NoteSerializer

# Create your views here.

# Helpers

class NoteApiView(APIView):

    def get(self, request):
        """Retorna un listado de todas las notas que existen en la base"""

        notas = Notes.objects.all()
        notas_serializer = NoteSerializer(notas, many=True)

        data = {
            "Heroes" : "Hola"
        }

        return Response(
            data = notas_serializer.data,
            status=status.HTTP_200_OK,
        )

    def post(self, request):
        """Crea una nueva nota"""

        serializer = NoteSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save

            data = {
                "message" : "La nota se creó efectivamente"
            }
        
            return Response(
                data=data,
                status=status.HTTP_201_CREATED,
            )
        
        return Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST,
        )


class CreateNoteApiView(APIView):

    def post(self, request):
        """Crea una nueva nota"""

        serializer = NoteSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save

            data = {
                "message" : "La nota se creó efectivamente"
            }
        
            return Response(
                data=data,
                status=status.HTTP_201_CREATED,
            )
        
        return Response(
            data=serializer.errors,
            status=status.HTTP_400_BAD_REQUEST,
        )


class NoteDetailApiView(APIView):

    def get(self, request, pk):
        """Retorna más info de una nota en particular"""

        try:
            note = Notes.objects.get(note)

            notes_serializer = NoteSerializer(note)

            return Response(
                data=notes_serializer.data,
                status=status.HTTP_200_OK,
            )
        
        except:
            data = {
                "message" : "La nota no fue encontrada..."
            }

            return Response(
                data=data,
                status=status.HTTP_400_BAD_REQUEST,
            )

    def put(self, request, pk):
        """Modifica una nota"""

        pass
        
        # --> hay que completar el put
    
    def delete(self, request, pk):
        """Elimina una nota"""

        pass

        # --> hay que completar el delete
                


