from django.contrib import admin
from .models import Photo, Entry, Tag, Project


# Register your models here.
class PhotoInline(admin.TabularInline):
    model = Photo
    extra = 1


class PhotoAdmin(admin.ModelAdmin):
    inlines = [PhotoInline]


admin.site.register(Entry, PhotoAdmin)
admin.site.register(Tag)
admin.site.register(Project)
