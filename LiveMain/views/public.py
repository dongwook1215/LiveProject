from django.shortcuts import render

# Create your views here.

def mv_admin(request):
    return render(request,'live_admin.html')
