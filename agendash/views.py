from django.views.generic import TemplateView

class index(TemplateView):
    template_name = "index.html"

class contacto(TemplateView):
    template_name = "contacto.html"

class equipo(TemplateView):
    template_name = "equipo.html"

class usuario(TemplateView):
    template_name = "usuario.html"