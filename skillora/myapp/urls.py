from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),

    path('login/', views.login_page, name='login'),

    path('signup/', views.signup_page, name='signup'),

    path('logout/', views.logout_page, name='logout'),

    path('profile/', views.profile_page, name='profile'),

    path('copa/', views.copa, name='copa'),

    path('copa_cbt/', views.copa_cbt, name='copa_cbt'),

    path('steno_cbt/', views.steno_cbt, name='steno_cbt'),

    path('employee_cbt/', views.employee_cbt, name='employee_cbt'),

    
    path('electrician/', views.electrician, name='electrician'),

    path('fitter/', views.fitter, name='fitter'),

    path('turner/', views.turner, name='turner'),

    path('steno/', views.steno, name='steno'),




    path('employee/', views.employee, name='employee'),


    
    # Dynamic Test URL
    path('<str:trade>/<str:chapter>/', views.trade_test,name='trade_test'
    ),


]