<link rel="stylesheet" href="{{ asset('/assets/bootstrap/css/bootstrap.min.css') }}">
<link rel="stylesheet" href="{{ asset('/assets/bootstrap/css/dashboard.css') }}">
<link rel="stylesheet" href="{{ asset('/css/admin.css') }}">
<link rel="stylesheet" href="{{ asset('assets/vendor_components/font-awesome/css/font-awesome.min.css') }}">
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/dataTables.bootstrap4.min.css">

<meta name="media-images-action" content="{{ route('admin.media.library.images') }}">
<meta name="media-upload-action" content="{{ route('admin.media.library.upload') }}">
<meta name="csrf-token" content="{{ csrf_token() }}">

<style type="text/css">
	body {
		font-size: .875rem;
	}
</style>
