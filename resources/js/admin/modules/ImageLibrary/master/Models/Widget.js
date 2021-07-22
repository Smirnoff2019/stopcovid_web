
import BaseModel from './BaseModel.js';

const Widget = (elem) => {

	const $this = elem || $('#media-library-widget');

	BaseModel( $this );

	$this.gallerySelector = '.attachments-list';
	$this.gallery = $this.find( $this.gallerySelector );
	
	$this.infoPanellSelector = '.attachments-info';
	$this.infoPanell = $this.find( $this.infoPanellSelector );

	// ==============================================================
	// Methods
	// ==============================================================

		$this.openWidget = function( callback = ()=>{}, time = 300 ) {

			$this.fadeIn( time );

			$this.callbackHandler( callback );

			return $this;
		}

		$this.closeWidget = function( callback = ()=>{}, time = 300 ) {
			
			$this.fadeOut( time );
			
			$this.callbackHandler( callback );

			return $this;
		}
	
	// ==============================================================

	return $this;
};

export default Widget();