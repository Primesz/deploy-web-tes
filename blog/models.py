from django.db import models

# Create your models here.
from django.db import models
import datetime
class Blog(models.Model):
    title = models.CharField(max_length=40)
    blog_content = models.TextField()
    image_content = models.ImageField(upload_to='static/photos/')
    pub_date = models.DateTimeField()
    author=models.CharField(max_length=200)
    def __str__(self):
        return self.title
