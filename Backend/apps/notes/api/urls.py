# Django import
from django.urls import path

# Views
from notes.api.views import (
    NoteApiView, 
    CreateNoteApiView, 
    NoteDetailApiView)