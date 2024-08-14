from django.db import models

#create your models here
class Post (models.Mode1):
    title = models.Charfield(max_length=200)
    image = models.ImageField(upload_to '/images')

    def __str__(self):
        return self.titleru