
import BaseController from './BaseController.js';
import GalleryItemController from './GalleryItemController.js';

import AjaxService from '../Services/AjaxService.js';
import GalleryContentLoadingService from '../Services/GalleryContentLoadingService.js';
import GalleryContent from '../Services/GalleryContent.js';
import GalleryItemCreator from '../Services/GalleryItemCreator.js';

import Widget from '../Models/Widget.js';
import AttachmentsGallery from '../Models/AttachmentsGallery.js';

class OpenWidgetEventController extends BaseController {

	boot() {

		this.clearGalleryContent();

		Widget.openWidget();

		this.loadGalleryContent();
	}

	clearGalleryContent() {
		AttachmentsGallery.showLoader();
		AttachmentsGallery.clear();
	}

	loadGalleryContent() {

		GalleryContentLoadingService.loadFirstPage( ( request ) => {
			const { data:imagesList } = request;
			
			GalleryContent.addImages( imagesList );

			[...imagesList].map( (itemData) => {

				const $galleryItem = new GalleryItemCreator( itemData );

				const $galleryItemController = new GalleryItemController( $galleryItem );

			} );
		
			AttachmentsGallery.delay(10).hideLoader();

		} );

	}

}

export default OpenWidgetEventController;