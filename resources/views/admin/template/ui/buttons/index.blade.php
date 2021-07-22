@extends('admin.layouts.app')

@section('title', 'Кнопки')
@section('pageName', 'Кнопки')

@section('pageOptions')
@endsection

@section('content')
	<div class="card mb-3 p-1 shadow-sm">
		<ul class="nav nav-pills" id="pills-tab" role="tablist">
		  	
		  	<li class="nav-item">
		    	<a 
		    		class="nav-link active" 
		    		id="buttons-list-tab" 
		    		data-toggle="pill" 
		    		href="#buttons-list" 
		    		role="tab" 
		    		aria-controls="buttons-list" 
		    		aria-selected="true"
		    	>Обычные кнопки</a>
		  	</li>

		  	<li class="nav-item">
		    	{{-- <a 
		    		class="nav-link" 
		    		id="pills-profile-tab" 
		    		data-toggle="pill" 
		    		href="#pills-profile" 
		    		role="tab" 
		    		aria-controls="pills-profile" 
		    		aria-selected="false"
		    	>Как использовать?</a> --}}
		  	</li>
		
		</ul>
	</div>

	<div class="tab-content" id="pills-tabContent">
	  	
	  	<div class="tab-pane fade show active" id="buttons-list" role="tabpanel" aria-labelledby="buttons-list-tab">
			
			@include('admin.template.ui.buttons.components.list')
	  	
	  	</div>
	  	
	  	{{-- <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
			
	  		
	  	</div> --}}
	
	</div>

@endsection

@push('styles')

	<link rel="stylesheet" href="{{ asset('/assets/js/rainbow-master/themes/css/monokai.css') }}">

@endpush

@push('scripts')

	<script src="{{ asset('/assets/js/rainbow-master/dist/rainbow.min.js') }}"></script>
	<script src="{{ asset('/assets/js/rainbow-master/src/language/php.js') }}"></script>
	<script src="{{ asset('/assets/js/rainbow-master/src/language/html.js') }}"></script>
	<script src="{{ asset('/assets/js/rainbow-master/src/language/javascript.js') }}"></script>

	<script type="text/javascript">
		;(($) => {

			Rainbow.extend('html', [
			    {
			        name: 'replace-br',
			        pattern: /(\\n)/g
			    },
			]);
			Rainbow.onHighlight(function(block, language) {
				$(block).find('.close').removeClass('close');
				$(block).find('.replace-br').replaceWith('\n');
			});
			Rainbow.extend('php', [
			    {
			        name: 'constant.numeric',
			        pattern: /@/g
			    },
			    {
			        name: 'keyword',
			        pattern: /icon|[a-zA-z]*(btn|Btn)/g
			    },
			]);
		})(jQuery);
	</script>

@endpush