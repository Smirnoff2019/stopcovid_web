@extends('admin.layouts.app')

@section('title', $title ?? 'Simple list page')
@section('pageName', $pageTitle ?? $title ?? 'Simple list page')

@section('pageOptions')
@endsection

@section('content')
	@php
		// echo '<pre>'; print_r($content); echo '</pre>';
	@endphp	

	<ul class="list-group">
		
		{{-- @foreach($content['data'] as $key => $item)
			<li class="list-group-item">
				<h4>{{ $item['title'] }}</h4>
				<p>{{ $item['description'] }}</p>
			</li>
		@endforeach --}}

		@foreach($content as $key => $post)
			<li class="list-group-item">
				<a href="{{ route('admin.posts.edit', ['id' => $post->id]) }}">{{ $post->title }}</a>
			</li>
		@endforeach

	</ul>

@endsection
