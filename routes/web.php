<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');

Route::group(['middleware' => 'SuperAdmin'], function () {
    // Здесь перечисляются маршруты, доступ к которым будет открыт только super_admin

	// Шаблоны и ресурсы
    Route::namespace('template')->group(function () {
		Route::namespace('ui')->group(function () {

			Route::get('icons', function() {
				return view('admin.template.ui.icons.index');
			})->name('template.ui.icons');
			
			Route::get('buttons', function() {
				return view('admin.template.ui.buttons.index');
			})->name('template.ui.buttons');

            Route::get('tables', function() {
                return view('admin.template.ui.tables.index');
            })->name('template.ui.tables');

		});
	});
	
	
    Route::namespace('Admin')->group(function () {

	    Route::namespace('QuarantineMeasure')->group(function () {
	   		
	   		Route::prefix('quarantine_measure')->group(function () {
				
				Route::get('/', 'QuarantineMeasureController@index')->name('admin.QuarantineMeasure.index');

			});
		
		});

	    Route::namespace('Posts')->group(function () {
	   		
	   		Route::prefix('posts')->group(function () {
				
				Route::get('/', 'PostsController@index')->name('admin.posts');

				Route::get('/{id}/edit', 'PostsController@edit')->name('admin.posts.edit')->where('id', '[0-9]+');
				
				Route::post('/{id}/update', 'PostsController@update')->name('admin.posts.update')->where('id', '[0-9]+');

			});
		
		});

	    Route::namespace('Images')->group(function () {
	   		
	   		Route::prefix('media/library')->group(function () {
				
				Route::get('images', 'ImagesController@index')->name('admin.media.library.images');
				Route::post('image/upload', 'ImagesController@upload')->name('admin.media.library.upload');

			});
		
		});

	});

});

Route::group(['middleware' => 'Admin'], function () {
    // Здесь перечисляются маршруты, доступ к которым будет открыт только admin
});

Route::group(['middleware' => 'Doctor'], function () {
    // Здесь перечисляются маршруты, доступ к которым будет открыт только doctor
});



