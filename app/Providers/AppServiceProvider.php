<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Blade;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Schema::defaultStringLength(191);
        
        Blade::include('admin.components.icons.simple-icon', 'icon');

        Blade::include('admin.components.sidebar.components.invoke-section', 'sidebarInvokeSection');

        Blade::include('admin.components.sidebar.components.point', 'sidebarPoint');
        Blade::include('admin.components.sidebar.components.folder-point', 'sidebarFolderPoint');
        Blade::include('admin.components.sidebar.components.edit-point', 'sidebarEditPoint');
        Blade::include('admin.components.sidebar.components.create-point', 'sidebarCreatePoint');

        Blade::include('admin.components.buttons.btn', 'btn');
        Blade::include('admin.components.buttons.danger', 'dangerBtn');
        Blade::include('admin.components.buttons.dark', 'darkBtn');
        Blade::include('admin.components.buttons.info', 'infoBtn');
        Blade::include('admin.components.buttons.light', 'lightBtn');
        Blade::include('admin.components.buttons.link', 'linkBtn');
        Blade::include('admin.components.buttons.primary', 'primaryBtn');
        Blade::include('admin.components.buttons.secondary', 'secondaryBtn');
        Blade::include('admin.components.buttons.success', 'successBtn');
        Blade::include('admin.components.buttons.warning', 'warningBtn');

    }
}
