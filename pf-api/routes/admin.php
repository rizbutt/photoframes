<?php

use Illuminate\Support\Facades\Route;

Route::get('admin/login','Auth\AdminAuthController@getLogin')->name('adminLogin');
Route::post('admin/login', 'Auth\AdminAuthController@postLogin')->name('adminLoginPost');
Route::get('admin/logout', 'Auth\AdminAuthController@logout')->name('adminLogout');


Route::group(['prefix' => 'admin','middleware' => 'adminauth'], function () {
	// Admin Dashboard
	Route::get('dashboard','AdminController@dashboard')->name('dashboard');
    Route::get('addframes', 'FramesController@addframe')->name('addframes');
    Route::get('frames', 'FramesController@index')->name('frames');
    Route::post('framestore', 'FramesController@store')->name('framestore');
});
