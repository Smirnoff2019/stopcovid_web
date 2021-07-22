
import BaseController from './BaseController.js';
import GalleryItemController from './GalleryItemController.js';

import AjaxService from '../Services/AjaxService.js';
import GalleryContentLoadingService from '../Services/GalleryContentLoadingService.js';
import GalleryContent from '../Services/GalleryContent.js';
import GalleryItemCreator from '../Services/GalleryItemCreator.js';

import AttachmentsGallery from '../Models/AttachmentsGallery.js';

class GalleryController extends BaseController {

	constructor() {
		super();

		this.canAjaxSend = true;
	}

	boot() {

		const Gallery = AttachmentsGallery;

		this.events( Gallery );
	}

	events( Gallery ) {

		Gallery.scroll(( event ) => {

			const $elem = $(event.target);
			const oversideFactor = 50;

			const galleryParentHeight = $elem.parent().height();
			const galleryHeight = $elem.height();
			const galleryScrollTop = $elem.scrollTop();
			const scrollHeight = $elem.prop('scrollHeight');

			const curentScrollPosition = galleryHeight + galleryScrollTop;
			const heightDelta = scrollHeight - curentScrollPosition;
			const isScrollToEnd = heightDelta < oversideFactor;

			if( isScrollToEnd && this.canAjaxSend ) {
				
				this.loadMoreImages();

			}

		});

	}

	loadMoreImages() {
		this.canAjaxSend = false;
		AttachmentsGallery.showLoader();
		
		GalleryContentLoadingService.loadNextPage( ( request ) => {
			const { data:imagesList } = request;
			
			GalleryContent.addImages( imagesList );
			
			[...imagesList].map( (itemData) => {

				const $galleryItem = new GalleryItemCreator( itemData );

				const $galleryItemController = new GalleryItemController( $galleryItem );

			} );

			AttachmentsGallery.hideLoader();
			
			setTimeout(() => { this.canAjaxSend = true; }, 200);

		}, ( res ) => {
			if( res === false ) {
				AttachmentsGallery.hideLoader();
			}
		} );
	}

}

export default GalleryController;