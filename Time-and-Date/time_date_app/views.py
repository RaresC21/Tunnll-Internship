from django.shortcuts import render

def index(request) :
    return render(request, 'time_date_app/index.html', {})
