from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib import auth
from django.http import HttpResponse, JsonResponse
import simplejson as json

# Create your views here.

def login_register(request):
    return render(request, "login_register.html")

def register(request):
    print(request.GET['id'])
    try:
        user = User.objects.create_user(
            username=request.GET['id'],
            password=request.GET['password'],
            email=request.GET['email']
        )
        return HttpResponse("success")
    except:
        return HttpResponse("failed")

def login(request):
    username=request.GET['id']
    password=request.GET['password']
    user = auth.authenticate(request, username=username, password=password)

    if user is not None:
        auth.login(request, user)
        return HttpResponse("success")
    else:
        return HttpResponse("failed")




