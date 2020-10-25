from django.contrib import admin
from .models import MultiFile, OneFile, Item, Option
# Register your models here.

admin.site.register(MultiFile)
admin.site.register(OneFile)
admin.site.register(Item)
admin.site.register(Option)