from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib import auth
from django.http import HttpResponse, JsonResponse
import simplejson as json
from ..models import Item, OneFile

# Create your views here.

def live_main(request):
    items=Item.objects.all()
    onefile=OneFile.objects.all()
    return render(request, "live_main.html",{'items': items, 'onefile':onefile})
