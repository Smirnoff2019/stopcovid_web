@php
	$body = array(
		'<button type="button" class="btn btn-primary">Главный</button>',
		'<button type="button" class="btn btn-secondary">Вторичный</button>',
		'<button type="button" class="btn btn-success">Успех</button>',
		'<button type="button" class="btn btn-danger">Опасность</button>',
		'<button type="button" class="btn btn-warning">Предупреждение</button>',
		'<button type="button" class="btn btn-info">Инфо</button>',
		'<button type="button" class="btn btn-light">Светлый</button>',
		'<button type="button" class="btn btn-dark">Темный</button>',
		'<button type="button" class="btn btn-link">Линк</button>'
	);
	$strBody = implode('\n', $body);
	$bodyHtml = implode(' ', $body);
@endphp
<div class="mb-5">

	<section class="card mb-4 shadow">
		
		<div class="card-header">
			<h5 class="justify-content-between d-flex mb-0">
				<span class="text-muted">Примеры</span> 
				<a href="#buttons-section-1" class="js-iconSection-collapse">
					@icon(['name' => 'fa-angle-down'])
				</a> 
			</h5>
		</div>

		<div id="buttons-section-1 pb-5" class="card-body">
			<p class="card-text">Предусмотрены некоторые предопределенные стили кнопок, каждый из которых имеет свою семантическую цель, и имеет дополнительные параметры для большего контроля и гибкости.</p>
			<div class="mb-3">
				@primaryBtn(["title" => "Главный"])
				@secondaryBtn(["title" => "Вторичный"])
				@successBtn(["title" => "Успех"])
				@dangerBtn(["title" => "Опасность"])
				@warningBtn(["title" => "Предупреждение"])
				@infoBtn(["title" => "Инфо"])
				@lightBtn(["title" => "Светлый"])
				@darkBtn(["title" => "Темный"])
				@linkBtn(["title" => "Линк"])
			</div>

			@component('admin.components.code.html')
				{{ $strBody }} 
			@endcomponent

			<p class="card-text">Чтобы создать кнопку используйте дерективу @php echo htmlspecialchars('@btn()'); @endphp</p>

			@component('admin.components.code.php')
				@php echo htmlspecialchars('@btn(["type" => "primary", "title" => "My button"])'); @endphp
			@endcomponent
			
			<p class="card-text">Или другие зарегестрированые дерективы</p>

			@component('admin.components.code.php')
@php 
	echo htmlspecialchars('
@primaryBtn(["title" => "Главный"])
@secondaryBtn(["title" => "Вторичный"])
@successBtn(["title" => "Успех"])
@dangerBtn(["title" => "Опасность"])
@warningBtn(["title" => "Предупреждение"])
@infoBtn(["title" => "Инфо"])
@lightBtn(["title" => "Светлый"])
@darkBtn(["title" => "Темный"])
@linkBtn(["title" => "Линк"])
	'); 
@endphp
			@endcomponent

		</div>

	</section>

</div>
