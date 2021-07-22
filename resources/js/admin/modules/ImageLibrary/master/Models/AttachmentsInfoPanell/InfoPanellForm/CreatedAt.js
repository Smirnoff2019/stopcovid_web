
import BaseModel from '../../BaseModel.js';

import InfoPanellForm from '../InfoPanellForm.js';

const CreatedAt = (elem) => {

	const $this = elem || InfoPanellForm.createdAt;

	BaseModel( $this );

	$this.state = {
		created_at: null,
	};
	
	// ==============================================================
	// Methods
	// ==============================================================
	
		$this.changeDate = function( $elem ) {
			
			const { created_at } = $this.state;
			const date = new Date(created_at).toDateString();
			$this.text( date || 'Нет данных' );

			return $this;
		}
	
	// ==============================================================

	$this.stateHandlers = [
		$this.changeDate,
	];
	
	return $this;
};

export default CreatedAt;