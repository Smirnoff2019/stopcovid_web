<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<title>Admin | @yield('title')</title>
		
		<meta name="csrf-token" content="{{ csrf_token() }}">

		@include('admin.components.head.stylesheet')
		
		@stack('styles')

	</head>
	<body class="theme-default">
		
		<div class="main-preloader">
			<div class="spinner-border" role="status">
			  <span class="sr-only">Loading...</span>
			</div>
		</div>

		@guest

			@yield('content')
			
		@endguest

		@auth
			@include('admin.components.navbar.main')
			

			<div class="container-fluid">
				<div class="row">

					@include('admin.components.sidebar.main')

					<main role="main" class="main col-md-9 ml-sm-auto col-lg-10 px-4">
						<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">

					        <h1 class="h4">@yield('pageName')</h1>
					        <div class="btn-toolbar mb-2 mb-md-0">

					        	@yield('pageOptions')
					          	
					          	{{-- <div class="btn-group mr-2">
					            	<button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
					            	<button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
					          	</div>
					          	<button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
					            	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
					            This week
					          	</button> --}}
					        </div>

				      	</div>
						
						@yield('content')

					</main>
				</div>
			</div>

		@endauth
		
		@include('admin.components.mediaLibrary.widget')

		@include('admin.components.foot.scripts')
		
		@stack('scripts')

	</body>
</html>
