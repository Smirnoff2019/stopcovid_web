
import BaseService from './BaseService.js';

class SelectedImage extends BaseService {
	
	constructor() {
		super();

		this.image = null;

		return this;
	}

	get() {
		return this.image;
	}

	set( image ) {
		isObject( image , () => {
			this.image = image;
		});
	
		return this;
	}

	remove() {
		this.image = null;

		return this;
	}

	hasImage() {
		return this.get() ? true : false;
	}

}

export default new SelectedImage();
