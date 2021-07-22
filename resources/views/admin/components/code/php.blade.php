<h6 class="card-subtitle mb-2 text-muted text-right">{{ $title ?? 'Laravel Blade | PHP'}}</h6>

<div class="rainbow-box">
	<div class="code-header">
		<div class="controlls px-2">
			@icon(['name' => 'fa fa-circle text-danger mx-1'])
			@icon(['name' => 'fa fa-circle text-secondary mx-1'])
			@icon(['name' => 'fa fa-circle text-success mx-1'])
		</div>
	</div>
	<pre class="pl-4 py-4"><code data-language="php">{{ $slot }}</code></pre>
</div>