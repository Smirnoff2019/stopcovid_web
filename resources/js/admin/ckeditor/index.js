(($) => {
    $(document).ready(() => {

    	$('#ckeditor-field').each(function() {

    		const $this = $(this);
	    	const ckeditorField = CKEDITOR.replace( 'ckeditor-field' );
	    	
	    	if(ckeditorField) {

		    	ckeditorField.on( 'change', function( evt ) {
		    		
		    		const data = evt.editor.getData();
		    		$this.text( data );

				});

	    	}

    	})

    });

})(jQuery);