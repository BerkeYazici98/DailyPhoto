from drf_extra_fields.relations import PresentablePrimaryKeyRelatedField
from drf_extra_fields.fields import Base64ImageField
from drf_writable_nested import WritableNestedModelSerializer
from rest_framework import serializers

from form.models import Entry, Tag, Photo, Project


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = "__all__"


class PhotoSerializer(serializers.ModelSerializer):

    tag = TagSerializer

    class Meta:
        model = Photo
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = "__all__"


class EntrySerializer(WritableNestedModelSerializer):

    photos = PhotoSerializer(many=True)
    project = ProjectSerializer

    class Meta:
        model = Entry
        fields = "__all__"
