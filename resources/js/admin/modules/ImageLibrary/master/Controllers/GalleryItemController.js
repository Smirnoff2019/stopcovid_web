
import BaseController from './BaseController.js';

import SelectedImage from '../Services/SelectedImage.js';

import GalleryItemComponent from '../Components/GalleryItem.js';

import AttachmentsGallery from '../Models/AttachmentsGallery.js';
import AttachmentModel from '../Models/AttachmentModel.js';
import AttachmentsInfoPanell from '../Models/AttachmentsInfoPanell.js';
import ReturnImageDataBtn from '../Models/ReturnImageDataBtn.js';


class GalleryItemController extends BaseController {

	constructor( attachmentItem ) {
		super( attachmentItem );

		this.attachmentItem = attachmentItem;
		
		return this;
	}

	boot( attachmentItem ) {

		this.events( attachmentItem );

	}

	events( $item ) {

		$item.on('click input', function( event ) {
			if($item.isUntouchable()) return;
			
			$item.select(( elem ) => {
				if(elem.isSelected()) {
					AttachmentsInfoPanell.activate( elem.state );
					SelectedImage.set( elem );
					ReturnImageDataBtn.setState({ status: true });
				} else {
					AttachmentsInfoPanell.deactivate( elem.state );
					SelectedImage.remove();
					ReturnImageDataBtn.setState({ status: false });
				}
			});
		})

	}

}

export default GalleryItemController;