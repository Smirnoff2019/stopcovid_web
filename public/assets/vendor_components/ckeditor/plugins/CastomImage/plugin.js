CKEDITOR.plugins.add( 'CastomImage', {

    icons: 'CastomImage',

    init: function( editor ) {

        console.log( 'Editor "' + editor.name + '" is being initialized!' );

        editor.addCommand( 'insertCastomImage', {

            allowedContent: 'img[alt,!src]{width,height}',

		    exec: function( editor ) {

                $({}).startImagesLibrary(( request ) => {
                    const { url } = request;
                    const resultImgHTML = `<img src="${url}">`;
                    editor.insertHtml( resultImgHTML );
                });
               
		    },
		});

        editor.ui.addButton( 'CastomImage', {
            label: 'Загрузить или выбрать изоражение из медиатеки',
            command: 'insertCastomImage',
            toolbar: 'insert'
        });
        
    }
});