
import BaseModel from '../../BaseModel.js';

import InfoPanellForm from '../InfoPanellForm.js';

const Title = (elem) => {

	const $this = elem || InfoPanellForm.title;

	BaseModel( $this );

	$this.state = {
		title: null,
	};
	
	// ==============================================================
	// Methods
	// ==============================================================
	
		$this.changeTitle = function( $elem ) {
			
			const { title } = $this.state;

			$this.val( title );

			return $this;
		}
	
	// ==============================================================

	$this.stateHandlers = [
		$this.changeTitle,
	];
	
	return $this;
};

export default Title;