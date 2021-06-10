from django.shortcuts import render

# Create your views here.

def KalkulatorKesehatan(request):
    context={
        'judul':'kalkulator kesehatan'
    }
    return render(request,'kalkulator.html',context)
