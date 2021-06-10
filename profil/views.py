from django.shortcuts import render

# Create your views here.
def profil(request):
    context={
        'judul':'profil'
    }
    return render(request,'profil.html',context)