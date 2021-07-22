@extends('admin.layouts.app')

@section('title', 'Главная страница')
@section('pageName', 'Главная страница')

@section('pageOptions')
	<div class="btn-group mr-2">
    	<button type="button" class="btn btn-sm btn-outline-secondary">UK</button>
    	<button type="button" class="btn btn-sm btn-outline-secondary">RU</button>
    	<button type="button" class="btn btn-sm btn-outline-secondary">EN</button>
  	</div>
@endsection

@section('content')
<button class="btn btn-info" id="render-media-library" data-media_library="true">Media</button>
@endsection
