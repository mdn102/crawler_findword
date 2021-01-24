from django.shortcuts import render
from django.http import HttpResponse
from .models import Posts


def index(request):
    posts = Posts.objects.all()[:10]  # means get the first 10
    context = {
        'title': 'Latest Posts',
        'posts': posts
    }

    return render(request, 'posts/index.html', context)


def details(request, id):
    post = Posts.objects.get(id=id)

    context = {
        'post': post
    }

    return render(request, 'posts/detail.html', context)
