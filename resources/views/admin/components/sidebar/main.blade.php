@php
	$sidebarSection = 'admin.components.sidebar.components.section';
	$sidebarSectionPoint = 'admin.components.sidebar.components.point';
@endphp
<nav class="col-md-2 d-none d-md-block sidebar theme-sidebar main-sidebar">
	<div class="sidebar-sticky">

		<ul class="nav flex-column">
			
			{{-- ==================================== --}}
			{{-- Dashboard --}}
			{{-- ==================================== --}}
				@php
					$DashboardActionStatus = Request::url() == route('home');
				@endphp
				@sidebarInvokeSection([
					'status' => $DashboardActionStatus,
					'title' => 'Панель управления',
					'icons' => ['fa-tachometer'],
					'url' => route('home'),
				])
			{{-- ==================================== --}}
			{{-- / Dashboard --}}
			{{-- ==================================== --}}
			
			{{-- ==================================== --}}
			{{-- Posts --}}
			{{-- ==================================== --}}
				@php
					$postsActionStatus = Request::is('admin/posts');
				@endphp
				@component($sidebarSection, [
					'status' => $postsActionStatus,
					'title' => 'Публикации',
				])

					@sidebarFolderPoint([
						'title' => 'Все публикации',
						'url' => route('admin.posts'),
					])

					@sidebarCreatePoint([
						'title' => 'Добавить новую',
					])

					@sidebarEditPoint([
						'title' => 'Редактировать',
					])

				@endcomponent
			{{-- ==================================== --}}
			{{-- / Posts --}}
			{{-- ==================================== --}}
			
			{{-- ==================================== --}}
			{{-- QuarantineMeasure --}}
			{{-- ==================================== --}}
				@php
					$QuarantineMeasureActionStatus = Request::url() == route('admin.QuarantineMeasure.index');
				@endphp
				@component($sidebarSection, [
					'status' => $QuarantineMeasureActionStatus,
					'title' => 'Карантинные меры',
					'icons' => ['fa-book']
				])

					@sidebarFolderPoint([
						'title' => 'Все записи',
						'url' => route('admin.QuarantineMeasure.index'),
					])

					@sidebarEditPoint([
						'title' => 'Редактировать',
					])

					@sidebarCreatePoint([
						'title' => 'Добавить новую',
					])

				@endcomponent
			{{-- ==================================== --}}
			{{-- / QuarantineMeasure --}}
			{{-- ==================================== --}}
			
			{{-- ==================================== --}}
			{{-- Integrations --}}
			{{-- ==================================== --}}
				@php
					$buttonsTabStatus = Request::url() == route('template.ui.buttons'); 
					$iconsTabStatus = Request::url() == route('template.ui.icons'); 
					$templateTabStatus = $buttonsTabStatus || $iconsTabStatus; 
				@endphp
				@component($sidebarSection, [
					'status' => $templateTabStatus,
					'title' => 'Компоненты',
					'icons' => ['fa-laptop']
				])

					@sidebarFolderPoint([
						'title' => 'Иконки',
						'url' => route('template.ui.icons'),
					])

					@sidebarFolderPoint([
						'title' => 'Кнопки',
						'url' => route('template.ui.buttons'),
					])

					@sidebarFolderPoint([
						'title' => 'Таблица',
						'url' => route('template.ui.tables'),
					])

				@endcomponent
			{{-- ==================================== --}}
			{{-- / Integrations --}}
			{{-- ==================================== --}}

		</ul>
	</div>
</nav>
