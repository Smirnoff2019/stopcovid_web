
import BaseService from './BaseService.js';

import GalleryItemComponent from '../Components/GalleryItem.js';

import AttachmentModel from '../Models/AttachmentModel.js';
import AttachmentsGallery from '../Models/AttachmentsGallery.js';

class GalleryItemCreator extends BaseService {

	constructor( itemData, direction = true ) {
		super(itemData, direction);

		this.itemData = itemData;
		this.direction = direction;

		this.item = this.createGalleryItem(itemData, direction);

		return this.item;
	}

	createGalleryItem(itemData, direction) {

		const $galleryItem = GalleryItemComponent( itemData );
		const $attachmentItem = AttachmentModel( $galleryItem );
		$attachmentItem.setState( itemData );

		if(direction) {
			AttachmentsGallery.append( $galleryItem );
		} else {
			AttachmentsGallery.prepend( $galleryItem );
		}

		return $attachmentItem;
	}

}

export default GalleryItemCreator;
