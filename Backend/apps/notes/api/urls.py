# Django import
from django.urls import path

# Views
from .views import (
    NoteApiView, 
    CreateNoteApiView, 
    NoteDetailApiView)

urlpatterns = [
    path('notes/',NoteApiView.as_view(),name='notes_list'),
    path('detail-note/<str:pk>/',NoteDetailApiView.as_view(),name='detail'),
    path('create/',CreateNoteApiView.as_view(),name='create'),
]