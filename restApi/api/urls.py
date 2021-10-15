from django.urls import include, path
from rest_framework import routers
from rest_framework.schemas import get_schema_view
from rest_framework.renderers import JSONOpenAPIRenderer
# Importing all Views
from . import views
 
router = routers.DefaultRouter()
router.register('NewRecord', views.NewRecordViewSet)
 

# Automatic URL routing
# Login URL for Browsable API Functionality
urlpatterns = [
    path('', include(router.urls)),
    path('openapi', get_schema_view(
        title="record",
        description="API for all things …",
        version="1.0.0"
    ), name='openapi-schema'),
    path('schema.json', get_schema_view(
        title="record",
        description="API for all things …",
        renderer_classes=[JSONOpenAPIRenderer]
    ), name='openapi-schema'),
    path('api-auth/',
    include('rest_framework.urls',
    namespace='rest_framework'))
]