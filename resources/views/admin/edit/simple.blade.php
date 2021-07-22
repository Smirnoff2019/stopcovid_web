@extends('admin.layouts.app')

@section('title', $title ?? 'Simple edit page')
@section('pageName', $pageTitle ?? $title ?? 'Simple edit page')

@section('pageOptions')
@endsection

@section('content')
	@php
		echo '<pre>'; print_r($content); echo '</pre>';
	@endphp	
@endsection
