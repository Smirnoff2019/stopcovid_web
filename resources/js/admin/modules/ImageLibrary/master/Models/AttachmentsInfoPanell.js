
import BaseModel from './BaseModel.js';

import Widget from './Widget.js';
import InfoPanellPrompt from './AttachmentsInfoPanell/InfoPanellPrompt.js';
import InfoPanellForm from './AttachmentsInfoPanell/InfoPanellForm.js';

const AttachmentsInfoPanell = (elem) => {

	const $this = elem || Widget.infoPanell;

	BaseModel( $this );
	
	$this.infoPanellPromptSelector = '#attachments-info-prompt';
	$this.infoPanellPrompt = $this.find( $this.infoPanellPromptSelector );

	$this.infoPanellFormSelector = '#attachments-info-form';
	$this.infoPanellForm = $this.find( $this.infoPanellFormSelector );

	// ==============================================================
	// Methods
	// ==============================================================
	
		$this.activate = function( data ) {
			
			InfoPanellForm.setState( data );
			InfoPanellPrompt.hidePanell();
			InfoPanellForm.delay( InfoPanellForm.animationTime ).showPanell();

			return $this;
		}
	
		$this.deactivate = function( data ) {
			
			InfoPanellForm.setState( data );
			InfoPanellForm.hidePanell();
			InfoPanellPrompt.delay( InfoPanellForm.animationTime ).showPanell();

			return $this;
		}
	
	// ==============================================================

	return $this;
};

export default AttachmentsInfoPanell();