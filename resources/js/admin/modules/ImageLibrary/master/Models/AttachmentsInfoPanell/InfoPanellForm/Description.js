
import BaseModel from '../../BaseModel.js';

import InfoPanellForm from '../InfoPanellForm.js';

const Description = (elem) => {

	const $this = elem || InfoPanellForm.description;

	BaseModel( $this );

	$this.state = {
		description: null,
	};
	
	// ==============================================================
	// Methods
	// ==============================================================
	
		$this.changeDescription = function( $elem ) {
			
			const { description } = $this.state;

			$this.val( description );

			return $this;
		}
	
	// ==============================================================

	$this.stateHandlers = [
		$this.changeDescription,
	];
	
	return $this;
};

export default Description;