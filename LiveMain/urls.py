from django.contrib import admin
from django.urls import path, include
from .views import v_live_main, v_login_register, public, v_live_detail, v_live_category
from django.conf.urls import url

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
# url 경로 지정 부분(client 단 통신)->눈에 보이는 url 
    path('',v_live_main.live_main, name='live_main'),
    path('category_living/',v_live_category.category_living, name='category_living'),
    path('category_food/',v_live_category.category_food, name='category_food'),
    path('category_fashion/',v_live_category.category_fashion, name='category_fashion'),
    path('detail/<int:item_id>/',v_live_detail.live_detail, name='live_detail'),
    path('login_register/', v_login_register.login_register, name="login_register"),
    path('login_register/admin/', public.mv_admin, name="mv_admin"),

# ajax 통신 부분(server 단 통신)->눈에 보이지 않는 url
    url(r'^login_register/register/$',v_login_register.register, name='register'),
    url(r'^login_register/login/$',v_login_register.login, name='login'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)