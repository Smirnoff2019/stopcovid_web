
import BaseController from './BaseController.js';
import GalleryItemController from './GalleryItemController.js';
import AttachmentUploadingModController from './AttachmentUploadingModController.js';

import GalleryContentLoadingService from '../Services/GalleryContentLoadingService.js';
import GalleryContent from '../Services/GalleryContent.js';
import GalleryItemCreator from '../Services/GalleryItemCreator.js';

import AttachmentsGallery from '../Models/AttachmentsGallery.js';

class UploadFilesController extends BaseController {

	constructor( files ) {
		super( files );
		
		const url = $('meta[name="media-upload-action"]').prop('content');

		this.uploadUrl = url;
		this.files = files;

		return this;
	}

	boot( files ) {
		
		[...files].map(( file ) => {
			this.uploadFile( file );
		});

		return this;
	}

	uploadFile( $file ) {

	  	const reader = new FileReader();
  		reader.readAsDataURL( $file );

	  	reader.onloadend = ( event ) => {

	  		const imageUrl = reader.result;
	  		const itemData = {
	  			id: null,
	  			url: imageUrl,
	  		};

			const $galleryItem = new GalleryItemCreator( itemData, false );

			const $galleryItemController = new GalleryItemController( $galleryItem );

			const $uploadingMod = new AttachmentUploadingModController( $galleryItem );
			
			this.uploadImageToServer($file, $uploadingMod);
	  	}
	}

	uploadImageToServer( $file, $progressMod ) {
		
		$progressMod.start();

		let AjaxData = new FormData();
			AjaxData.append( 'file', $file );

		const apiUrl = this.uploadUrl;
		const csrf_token = $('meta[name="csrf-token"]').prop('content');

		$.ajax({
			headers: {'X-CSRF-TOKEN': csrf_token},
    		url: apiUrl, 
				type: 'post', 
				dataType: 'json', 
      		contentType: false, 
      		processData: false, 
      		data: AjaxData,
    	})
    		.done(( request ) => {
				$progressMod.stop();
				$progressMod.updateState( request );
    		})
    		.fail(( request ) => {
    			
    		})
    		.always(( request ) => {
    			
    		});

	}

}

export default UploadFilesController;