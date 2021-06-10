from django.shortcuts import render

# Create your views here.

def kalori(request):
    context={
        'judul':'kalori'
    }
    return render(request,'kalori.html',context)
