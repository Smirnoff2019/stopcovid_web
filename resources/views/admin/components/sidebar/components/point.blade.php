@php
	$url = $url ?? '#';
	$status = $status ?? Request::url() == $url;
	$active = $status ? 'active' : '';
	$altTitle = 'Title not found';

	list($deactiveIcon, $activeIcon) = $icons = [
		$icons[0] ?? 'fa-folder',
		$icons[1] ?? $icons[0] ?? 'fa-folder-open'
	];
@endphp

<li class="nav-item w-100 mb-1">
	<a href="{{ $url }}" class="nav-link {{ $active }}">
		@icon([
			'name' => $status ? $activeIcon : $deactiveIcon,
			'className' => 'fa-fw mr-2'
		])
		<span>{{ $title ?? $altTitle }}</span>
	</a>
</li>