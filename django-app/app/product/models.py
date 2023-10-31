from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    release_date = models.DateField()

    def __str__(self):
        return self.name
