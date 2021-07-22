
import BaseModel from './BaseModel.js';

import Widget from './Widget.js';

const ReturnImageDataBtn = (elem) => {

	const $this = elem || Widget.find('#widget-return-image');

	BaseModel($this);

	$this.classList = {
		active: 'btn-primary',
		deactive: 'btn-secondary',
	};

	$this.state = {
		status: false,
	}

	// ==============================================================
	// Methods
	// ==============================================================

		$this.activate = function ( callback ) {
			$this.setState({
				status: true
			});

			$this.callbackHandler( callback );
			return $this;
		}

		$this.deactivate = function ( callback ) {
			$this.setState({
				status: true
			});

			$this.callbackHandler( callback );
			return $this;
		}

		$this.changeBtnClass = function ( callback ) {
			const { status } = $this.state;
			const { active, deactive } = $this.classList;

			$this
				.removeClass( status ? deactive : active )
				.addClass( status ? active : deactive );

			$this.callbackHandler( callback );
			return $this;
		}

		$this.isActive = function ( callback ) {
			const { status } = $this.state;
			
			$this.callbackHandler( callback );
			
			return (status);
		}

	// ==============================================================

	$this.stateHandlers = [
		$this.changeBtnClass,
	];

	return $this;
};

export default ReturnImageDataBtn();