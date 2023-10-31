from django.contrib import admin

from .models import Product


class ProductAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['name']}),
        ("Sales", {'fields': ['price']}),
        ("Additional Information", {'fields': ['release_date']}),
    ]
    list_display = ['name', 'price', 'release_date']
    list_filter = ['release_date']
    search_fields = ['name']


admin.site.register(Product, ProductAdmin)
