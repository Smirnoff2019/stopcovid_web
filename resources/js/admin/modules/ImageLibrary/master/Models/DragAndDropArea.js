
import BaseModel from './BaseModel.js';

import Widget from './Widget.js';

const DragAndDropArea = (elem) => {

	const $this = elem || Widget.find('.media-modal-drag-area');

	BaseModel($this);

	$this.activeClassName = 'active';

	$this.dropArea = $this.find('.drag-area-border');

	$this.state = {
		status: false
	}

	// ==============================================================
	// Methods
	// ==============================================================

		$this.showArea = function( callback ) {
			const className = $this.activeClassName;
			$this.addClass( className );

			$this.callbackHandler( callback );
			return $this;
		}

		$this.hideArea = function( callback ) {
			const className = $this.activeClassName;
			$this.removeClass( className );

			$this.callbackHandler( callback );
			return $this;
		}

	// ==============================================================

	$this.stateHandlers = [
	];

	return $this;
};

export default DragAndDropArea();