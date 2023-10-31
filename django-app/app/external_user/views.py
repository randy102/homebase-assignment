from django.shortcuts import render

from .models import ExternalUser


def index(request):
    user_list = ExternalUser.fetch()
    context = {
        'user_list': [
            {'name': 'Randy', 'email': 'randy@gmail.com', 'phone': '02592399532'}
        ]
    }
    return render(request, "external_user/index.html", {'user_list': user_list})
