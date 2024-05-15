from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'stocks', views.StockViewSet)
router.register(r'watchlist-items', views.WatchlistItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_auth.urls')),
    path('auth/registration/', include('rest_auth.registration.urls')),
    path('watchlist-data/', views.WatchlistDataView.as_view()),
]