@extends('admin.layouts.app')

@section('title', 'Tables - список доступных видов таблиц')
@section('pageName', 'Tables - список доступных видов таблиц')

@section('pageOptions')
@endsection

@section('content')

    <div class="mb-5"></div>
    @include('admin.template.ui.tables.components.black-bootstrap-tables')
    <div class="mb-5"></div>
@endsection
