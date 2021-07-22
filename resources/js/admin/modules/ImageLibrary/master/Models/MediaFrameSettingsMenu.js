
import BaseModel from './BaseModel.js';

import Widget from './Widget.js';

const MediaFrameSettingsMenu = (elem) => {

	const $this = elem || Widget.find('#media-frame-settings');

	BaseModel($this);

	$this.state = {
	}

	// ==============================================================
	// Methods
	// ==============================================================


	// ==============================================================

	$this.stateHandlers = [
	];

	return $this;
};

export default MediaFrameSettingsMenu();