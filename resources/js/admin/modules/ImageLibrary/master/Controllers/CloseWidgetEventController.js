
import BaseController from './BaseController.js';

import AppRequestService from '../Services/AppRequestService.js';
import SelectedImage from '../Services/SelectedImage.js';

import Widget from '../Models/Widget.js';
import WidgetCloseBtn from '../Models/WidgetCloseBtn.js';
import ReturnImageDataBtn from '../Models/ReturnImageDataBtn.js';

class CloseWidgetEventController extends BaseController {

	boot() {

		this.widgetCloseBtnObserver();
		this.returnImageDataBtnObserver();

	}

	returnImageDataBtnObserver() {

		ReturnImageDataBtn.on('click input', (event) => {
			ReturnImageDataBtn.isActive(() => {
				
				if(SelectedImage.hasImage()) {

					const $image = SelectedImage.get();
					const imageData = $image.formatStateDataToRequest();
					AppRequestService.pushRequest( imageData );
					this.closeWidgetHandler();
					
				}

			});
		});

	}

	widgetCloseBtnObserver() {

		WidgetCloseBtn().on('click input', this.closeWidgetHandler);

	}

	closeWidgetHandler( event ) {
	
		Widget.closeWidget();
	
	}

}

export default CloseWidgetEventController;