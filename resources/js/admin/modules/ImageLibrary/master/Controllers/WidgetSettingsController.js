
import BaseController from './BaseController.js';

import AttachmentsGallery from '../Models/AttachmentsGallery.js';
import TypesField from '../Models/WidgetSettings/AttachmentColumns/TypesField.js';

class WidgetSettingsController extends BaseController {

	constructor() {
		super();
	}

	boot() {

		this.galleryListColumnsViewTypes();

	}

	galleryListColumnsViewTypes() {

		TypesField.renderTypesOptions();

		TypesField.on('change', function(e) {

			const value = $(this).val();

			TypesField.setState({ type: value });

			TypesField.eachTypes(( className ) => {
				AttachmentsGallery.removeClass( className );
			});

			const typeData = TypesField.getTypeClassName( value );
			const { value:className } = typeData;
			
			AttachmentsGallery.addClass( className );

		})

	}

}

export default WidgetSettingsController;