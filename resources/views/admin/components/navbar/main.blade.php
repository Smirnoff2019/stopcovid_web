<nav class="navbar theme-navbar navbar-dark fixed-top flex-md-nowrap p-0 ">
	<a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">{{ config('app.name') }} Admin</a>
	<div class="col-md-10 col-sm-9 d-flex justify-content-end">

		<ul class="navbar-nav px-3">
			<li class="nav-item text-nowrap">
				<form id="logout-form" class="hide" action="{{ route('logout') }}" method="POST" style="display: none;">
	                @csrf
	            </form>
				<a class="nav-link pt-1" href="#" onclick="return jQuery('#logout-form').submit()">Sign out</a>
			</li>
		</ul>

	</div>
</nav>