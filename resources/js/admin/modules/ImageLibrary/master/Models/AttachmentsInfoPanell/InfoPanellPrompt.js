
import BaseModel from '../BaseModel.js';

import Widget from '../Widget.js';

const InfoPanellPrompt = (elem) => {

	const $this = elem || Widget.infoPanell.find( '#attachments-info-prompt' );

	BaseModel( $this );

	$this.animationTime = 300;
	
	// ==============================================================
	// Methods
	// ==============================================================
	
		$this.showPanell = function( callback ) {

			$this.fadeIn( $this.animationTime );

			$this.callbackHandler( callback );

			return $this;
		}
	
		$this.hidePanell = function( callback ) {

			$this.fadeOut( $this.animationTime );

			$this.callbackHandler( callback );

			return $this;
		}
	
	// ==============================================================

	return $this;
};

export default InfoPanellPrompt();