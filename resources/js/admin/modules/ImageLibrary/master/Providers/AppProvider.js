
import BaseProvider from './BaseProvider.js';

import OpenWidgetEventController from '../Controllers/OpenWidgetEventController.js';
import CloseWidgetEventController from '../Controllers/CloseWidgetEventController.js';
import GalleryController from '../Controllers/GalleryController.js';
import WidgetSettingsController from '../Controllers/WidgetSettingsController.js';
import DragAndDropController from '../Controllers/DragAndDropController.js';

class AppProvider extends BaseProvider {

	boot() {
		new OpenWidgetEventController();
		new GalleryController();
		new WidgetSettingsController();
		new DragAndDropController();
		new CloseWidgetEventController();
	}

}

export default AppProvider;