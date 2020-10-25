from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.contrib.auth.models import User
from django.contrib import auth
from django.http import HttpResponse, JsonResponse
import simplejson as json
from ..models import Item, OneFile, MultiFile, Option
# Create your views here.

def live_detail(request,item_id):
    item_img=get_object_or_404(OneFile, itemid=item_id)
    try:
        item_file=get_list_or_404(MultiFile, itemid=item_id)
    except:
        item_file=None
        pass

    item=get_object_or_404(Item, pk=item_id)

    if item.liveurl == "":
        liveurl=False
    else:
        liveurl=True
    return render(request, 'live_detail.html',{'item':item,'item_img':item_img,'item_file':item_file, 'liveurl':liveurl})