from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib import auth
from django.http import HttpResponse, JsonResponse
import simplejson as json
from ..models import Item, OneFile

# Create your views here.

def category_fashion(request):
    items=Item.objects.all()
    onefile=OneFile.objects.all()
    return render(request, "category_fashion.html",{'items': items, 'onefile':onefile})


def category_food(request):
    items=Item.objects.all()
    onefile=OneFile.objects.all()
    return render(request, "category_food.html",{'items': items, 'onefile':onefile})


def category_living(request):
    items=Item.objects.all()
    onefile=OneFile.objects.all()
    return render(request, "category_living.html",{'items': items, 'onefile':onefile})
