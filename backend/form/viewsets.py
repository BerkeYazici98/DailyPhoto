from rest_framework import viewsets

from form.models import Tag, Entry, Project, Photo
from form.serializers import TagSerializer, EntrySerializer, ProjectSerializer, PhotoSerializer


class EntryViewSet(viewsets.ModelViewSet):
    queryset = Entry.objects.all().order_by("-date")
    serializer_class = EntrySerializer


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class EntryPhotoViewSet(viewsets.ModelViewSet):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer

    lookup_field = "entry__id"
