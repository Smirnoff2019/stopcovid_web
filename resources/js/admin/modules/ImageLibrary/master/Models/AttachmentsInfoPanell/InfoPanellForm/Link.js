
import BaseModel from '../../BaseModel.js';

import InfoPanellForm from '../InfoPanellForm.js';

const Link = (elem) => {

	const $this = elem || InfoPanellForm.link;

	BaseModel( $this );

	$this.state = {
		url: null,
	};
	
	// ==============================================================
	// Methods
	// ==============================================================
	
		$this.resetAttrValues = function( $elem ) {
			
			const { url } = $this.state;
			const urlTitle = `${url.substr(0, 35)}...`;

			$this.attr('href', url);
			$this.text(urlTitle);

			return $this;
		}
	
	// ==============================================================

	$this.stateHandlers = [
		$this.resetAttrValues,
	];
	
	return $this;
};

export default Link;