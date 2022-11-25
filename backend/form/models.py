from django.db import models


# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=200, blank=False)

    def __str__(self):
        return self.name


class Entry(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, null=True, related_name="projects")
    description = models.CharField(max_length=250, blank=False)
    date = models.DateField(blank=False)


class Tag(models.Model):
    name = models.CharField(max_length=50, blank=False)

    def __str__(self):
        return self.name


class Photo(models.Model):
    entry = models.ForeignKey(Entry, on_delete=models.CASCADE, null=True, related_name="photos")
    tags = models.ManyToManyField(Tag)
    date = models.DateField(auto_now_add=True)
    image = models.ImageField(upload_to='images')
