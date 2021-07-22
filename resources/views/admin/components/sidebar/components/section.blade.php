@php
	$status = $status ?? false;
	$active = $status ? 'active' : '';
	$url = $url ?? '#';

	list($deactiveIcon, $activeIcon) = $icons = [
		$icons[0] ?? 'fa-folder',
		$icons[1] ?? $icons[0] ?? 'fa-folder-open'
	];

	$controllsIcon = 'fa-fw fa-angle-right';
	$altTitle = 'Title not found';

@endphp

<li class="nav-item sidebar-section mb-1 treeview {{ $active }}">
	
	<a class="nav-link head {{ $active }}" href="{{ $url }}">
		<span class="title">
			@icon(['name' => $status ? $activeIcon : $deactiveIcon ])
			{{ $title ?? $altTitle }}
		</span>
		<span class="controlls">
			@icon(['name' => $controllsIcon])
		</span>
	</a>
	
	<ul class="nav body px-3 mt-1">
		<li class="mt-3 w-100"></li>
		
		{{ $slot }}

		<li class="mb-2 w-100"></li>
	</ul>

</li>
