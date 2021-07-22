<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::prefix('v1')->group(function () {

	Route::namespace('CloudMessaging')->group(function () {
		// =======================================================
		// Gloud Notifications
		//  - MAC Address push notifications
		// =======================================================

    	Route::post('/notifications/mac_address/push/{macAddress}', 'NotificationsController@index');

	});


	// =======================================================
	// Quarantine Measures
	// =======================================================
	Route::namespace('QuarantineMeasure')->group(function () {
		Route::prefix('quarantine_measure')->group(function () {
			
			// Get Quarantine Measures post
			Route::get('/', 'QuarantineMeasureController@index')->name('api.QuarantineMeasure.index');

		});
	});

});
