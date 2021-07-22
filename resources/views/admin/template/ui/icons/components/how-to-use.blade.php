<section class="card mb-4 shadow pb-4">

	<div class="card-header">
		<h5 class="justify-content-between d-flex mb-0">
			<span class="text-muted">Используйте компоненты</span> 
			<a href="#icons-components-tab-content" class="js-iconSection-collapse">
				<i class="fa fa-angle-down"></i>
			</a> 
		</h5>
	</div>

	<div id="icons-components-tab-content" class="card-body">

		<p class="card-text">Для вывода иконки в шаблоне можно использовать предусмотренный компонент @php echo htmlspecialchars('@icon()'); @endphp</p>


		@component('admin.components.code.php')
			@php echo htmlspecialchars('@icon(["name" => "fa-folder"])'); @endphp
		@endcomponent 

		<p class="card-text">В результате выполнения кода на этом месте будет выведено</p>

		@component('admin.components.code.html')
			@icon(["name" => "fa-folder"])
		@endcomponent 

		<p class="card-text">Список параметров компонента:</p>
		<ul class="nav pl-4 d-flex flex-column">

			<li>
				<p class="card-text">
					<span class="code-variable">$tag</span> - название HTML тега обертки иконки (например <i>i</i>, <i>span</i>, <i>div</i>);
				</p>
			</li>

			<li>
				<p class="card-text">
					<span class="code-variable">$name</span> - класс название иконки (например 'fa-folder');
				</p>
			</li>

			<li>
				<p class="card-text">
					<span class="code-variable">$className</span> - дополнительный класс (например: 'mr-2', 'bg-dark mx-2');
				</p>
			</li>

			<li>
				<p class="card-text">
					<span class="code-variable">$id</span> - значение для атрибута <strong>id</strong>;
				</p>
			</li>
			
		</ul>
	</div>

</section>