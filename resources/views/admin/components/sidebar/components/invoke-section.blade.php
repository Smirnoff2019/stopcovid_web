@php
	$status = $status ?? null;
	$active = $status ? 'active' : '';
	$url = $url ?? '#';

	list($deactiveIcon, $activeIcon) = $icons = [
		$icons[0] ?? 'fa-thumb-tack',
		$icons[1] ?? $icons[0] ?? 'fa-thumb-tack'
	];

	$controllsIcon = 'fa-fw fa-angle-right';
	$altTitle = 'Title not found';

@endphp

<li class="nav-item sidebar-section mb-1 {{ $active }}">
	<a class="nav-link head {{ $active }}" href="{{ $url }}">
		<span class="title">
			@icon(['name' => $status ? $activeIcon : $deactiveIcon ])
			{{ $title ?? $altTitle }}
		</span>
		<span class="controlls">
			@icon(['name' => $controllsIcon])
		</span>
	</a>
</li>