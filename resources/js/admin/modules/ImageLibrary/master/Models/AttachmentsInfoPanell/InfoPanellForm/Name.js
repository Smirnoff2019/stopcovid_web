
import BaseModel from '../../BaseModel.js';

import InfoPanellForm from '../InfoPanellForm.js';

const Name = (elem) => {

	const $this = elem || InfoPanellForm.name;

	BaseModel( $this );

	$this.state = {
		name: null,
	};
	
	// ==============================================================
	// Methods
	// ==============================================================
	
		$this.changeName = function( $elem ) {
			
			const { name, format } = $this.state;

			$this.text( `${name}.${format}` );

			return $this;
		}
	
	// ==============================================================

	$this.stateHandlers = [
		$this.changeName,
	];
	
	return $this;
};

export default Name;