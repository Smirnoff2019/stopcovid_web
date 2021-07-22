@extends('admin.layouts.app')

@section('title', $title ?? 'Simple create page')
@section('pageName', $pageTitle ?? $title ?? 'Simple create page')

@section('pageOptions')
@endsection

@section('content')
	@php
		echo '<pre>'; print_r($content); echo '</pre>';
	@endphp	
@endsection
