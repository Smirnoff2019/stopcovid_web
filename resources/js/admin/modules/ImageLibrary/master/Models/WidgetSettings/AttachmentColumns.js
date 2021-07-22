
import BaseModel from '../BaseModel.js';

import Widget from '../Widget.js';
import MediaFrameSettingsMenu from '../MediaFrameSettingsMenu.js';
import AttachmentsGallery from '../AttachmentsGallery.js';

const AttachmentColumns = (elem) => {

	const $this = elem || MediaFrameSettingsMenu.find('#attachment-columns-module');

	BaseModel($this);

	// ==============================================================
	// Methods
	// ==============================================================

		

	// ==============================================================

	$this.stateHandlers = [
	];

	return $this;
};

export default AttachmentColumns();