@extends('admin.layouts.app')

@section('title', 'Войти')

@push('styles')
	<link rel="stylesheet" href="{{ asset('/assets/bootstrap/css/signin.css') }}">
@endpush

@section('content')

	<section class="text-center container-fluid">
	
		<form 
			action="{{ route('login') }}" 
			method="POST" 
			class="form-signin card px-4 shadow-lg"
		>
			@csrf
			
			<h1 class="h3 mb-4 mt-4 font-weight-normal">{{ config('app.name') }}</h1>
			
			<div class="mt-2 mb-3">
				<label for="inputEmail" class="sr-only">Login</label>
				<input 
					type="email" 
					id="inputEmail" 
					class="form-control @error('email') is-invalid @enderror" 
					placeholder="Login" 
					required="" 
					autofocus=""
					name="email" 
					value="{{ old('email') }}" 
				>
                @error('email')
			      	<div class="invalid-feedback">
			        	<strong>{{ $message }}</strong>
			      	</div>
                @enderror
			</div>

			<div class="mb-2">
				<label for="inputPassword" class="sr-only">Password</label>
				<input 
					type="password" 
					id="inputPassword" 
					class="form-control @error('password') is-invalid @enderror" 
					placeholder="Password" 
					required=""
					name="password" 
					value="{{ old('password') }}" 
				>
                @error('password')
			      	<div class="invalid-feedback">
			        	<strong>{{ $message }}</strong>
			      	</div>
                @enderror
			</div>


	      	<div class="custom-control custom-checkbox mb-4">
		        <input 
		        	type="checkbox" 
		        	class="custom-control-input" 
		        	id="customControlAutosizing" 
		        	name="remember"
		        	{{ old('remember') ? 'checked' : '' }}
		        >
		        <label class="custom-control-label" for="customControlAutosizing">Remember me</label>
	      	</div>
			
			<button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
			
			<p class="mt-4 mb-3 text-muted">© 2020</p>

		</form>

	</section>

@endsection
