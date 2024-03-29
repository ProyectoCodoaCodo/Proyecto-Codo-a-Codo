"""
URL configuration for agendash project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path , include

from .views import index
from .views import contacto
from .views import equipo
from .views import usuario

urlpatterns = [
    path('admin/', admin.site.urls),
    path("contacto/", contacto.as_view(), name="contacto")
]
urlpatterns += [
  
    path("equipo/", equipo.as_view(), name="equipo")
]
urlpatterns += [
   
     path("usuario/", usuario.as_view(), name="usuario")
]
urlpatterns += [
 
    path("", index.as_view(), name="index")
]