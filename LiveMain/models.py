from django.db import models
from uuid import uuid4
from datetime import datetime

# Create your models here.

class Item(models.Model):
    category=models.TextField()
    name=models.TextField()
    price=models.TextField()
    liveurl=models.TextField(null=True, blank=True)
    livetime=models.DateTimeField('date published',null=True,blank=True)
    s_explain=models.TextField()
    explain=models.TextField()

    def __str__(self):
        return str(self.pk)+"/"+self.name


class MultiFile(models.Model):
    filename=models.TextField(null=True,verbose_name='첨부파일명')
    upload_files = models.FileField(upload_to='multi_files', null=True, blank=True, verbose_name='파일')
    itemid=models.IntegerField()

    def __str__(self):
        return str(self.pk)+"/"+self.filename


class OneFile(models.Model):
    filename=models.TextField(null=True,verbose_name='첨부파일명')
    upload_files = models.FileField(upload_to='one_files/', null=True, blank=True, verbose_name='파일')
    itemid=models.IntegerField()

    def __str__(self):
        return str(self.pk)+"/"+self.filename


class Option(models.Model):
    optionname=models.TextField()
    option=models.TextField()
    option_num=models.TextField()
    itemid=models.IntegerField()

    def __str__(self):
        return str(self.pk)+"/"+self.optionname




