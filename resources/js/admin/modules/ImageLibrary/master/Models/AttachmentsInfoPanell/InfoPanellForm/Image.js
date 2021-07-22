
import BaseModel from '../../BaseModel.js';

import InfoPanellForm from '../InfoPanellForm.js';

const Image = (elem) => {

	const $this = elem || InfoPanellForm.image;

	BaseModel( $this );

	$this.state = {
		url: null,
		title: null
	};
	
	// ==============================================================
	// Methods
	// ==============================================================
	
		$this.resetAttrValues = function( $elem ) {
			
			const { url, title } = $this.state;

			$this.attr('src', url);
			$this.attr('alt', title);

			return $this;
		}
	
	// ==============================================================

	$this.stateHandlers = [
		$this.resetAttrValues,
	];
	
	return $this;
};

export default Image;