from django.urls import path, include
from rest_framework import routers

from form import viewsets

router = routers.DefaultRouter()
router.register(r"entries", viewsets.EntryViewSet)
router.register(r"projects", viewsets.ProjectViewSet)
router.register(r"entry-photos", viewsets.EntryPhotoViewSet)

urlpatterns = [
    path("", include(router.urls))
]
