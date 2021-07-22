@extends('admin.layouts.app')

@section('title', $title ?? 'Редактировать публикацию')
@section('pageName', $pageTitle ?? $title ?? 'Редактировать публикацию')

@section('pageOptions')
	<button class="btn btn-success btn-sm js-click-triger-btn" data-trigerid="post-form-submit-btn">Сохранить</button>
@endsection

@section('content')
	@error('update')
	<div class="alert alert-danger alert-dismissible fade show" role="alert">
	  	<strong>Ошибка!</strong> {{ $message }}
	  	<button type="button" class="close" data-dismiss="alert" aria-label="Close">
	    	<span aria-hidden="true">&times;</span>
	  	</button>
	</div>
	@enderror
	
	<form action="{{ route('admin.posts.update', ['id' => $post->id]) }}" method="post" class="mb-5">
		
		{{ csrf_field() }}

		<input type="hidden" name="id" value="{{ $post->id }}">

	  	<div class="form-group">
		    <label for="post-title" class="h6">Заголовок</label>
		    <input type="text" class="form-control" id="post-title" name="title" value="{{ $post->title ?? '' }}">
		    @error('title')
		    	<p class="text-danger m-0">{{ $message }}</p>
			@enderror
	  	</div>

	  	<div class="form-group">
		    <label for="post-sub_title" class="text-muted">Под заголовок</label>
		    <input type="text" class="form-control" id="post-sub_title" name="sub_title" value="{{ $post->sub_title ?? '' }}">
		    @error('sub_title')
		    	<p class="text-danger m-0">{{ $message }}</p>
			@enderror
	  	</div>
	
	  	<div class="form-group">
		    <label for="post-sub_title" class="text-muted">Контент</label>
		    @error('content')
		    	<p class="text-danger m-0">{{ $message }}</p>
			@enderror
			<textarea id="ckeditor-field" name="content">{{ $post->content ?? '' }}</textarea>
		    @error('content')
		    	<p class="text-danger m-0">{{ $message }}</p>
			@enderror
	  	</div>
	  	
	  	<div class="form-group">
	    	<label for="post-description" class="text-muted">Описание</label>
	    	<textarea class="form-control" id="post-description" name="description" rows="3">{{ $post->description ?? '' }}</textarea>
		    @error('description')
		    	<p class="text-danger m-0">{{ $message }}</p>
			@enderror
	  	</div>

	  	<button id="post-form-submit-btn" type="submit" class="btn btn-success px-4 my-4">Сохранить</button>

	</form>
	@php
		// echo '<pre>'; print_r($post); echo '</pre>';
	@endphp	
@endsection
