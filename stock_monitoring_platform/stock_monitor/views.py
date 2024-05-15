from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Stock, WatchlistItem
from .serializers import StockSerializer, WatchlistItemSerializer
import alpha_vantage
from alpha_vantage.timeseries import TimeSeries

class StockViewSet(viewsets.ModelViewSet):
    queryset = Stock.objects.all()
    serializer_class = StockSerializer

class WatchlistItemViewSet(viewsets.ModelViewSet):
    serializer_class = WatchlistItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return WatchlistItem.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

def get_stock_data(symbol):
    api_key = 'YOUR_ALPHA_VANTAGE_API_KEY'
    ts = TimeSeries(key=api_key, output_format='pandas')
    data, meta_data = ts.get_intraday(symbol=symbol, interval='1min', outputsize='compact')
    latest_data = data.iloc[-1]
    return {
        'symbol': symbol,
        'latest_price': latest_data['4. close'],
        'timestamp': latest_data.name
    }

class WatchlistDataView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        watchlist_items = WatchlistItem.objects.filter(user=request.user)
        stock_data = []
        for item in watchlist_items:
            stock_data.append(get_stock_data(item.stock_symbol))
        return Response(stock_data)