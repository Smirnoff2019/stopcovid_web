
import BaseModel from './BaseModel.js';

import Widget from './Widget.js';

const AttachmentsGallery = (elem) => {

	const $this = elem || Widget.gallery;

	BaseModel( $this );

	$this.loadingClassName = 'loading';

	// ==============================================================
	// Methods
	// ==============================================================
	
		$this.clear = function( callback ) {
			$this.html( '' );

			$this.callbackHandler( callback );
			return $this;
		}

		$this.itemsList = function( callback ) {
			const itemsList = $this.find( '.attachment' );

			$this.callbackHandler( callback, itemsList, $this );
			return itemsList;
		}

		$this.showLoader = function( callback ) {
			
			const $parent = $this.parent();
			const className = $this.loadingClassName;

			$parent.addClass( className );

			$this.callbackHandler( callback );
			return $this;
		}

		$this.hideLoader = function( callback ) {
			
			const $parent = $this.parent();
			const className = $this.loadingClassName;
			
			$parent.removeClass( className );

			$this.callbackHandler( callback );
			return $this;
		}
	
	// ==============================================================

	return $this;
};

export default AttachmentsGallery();