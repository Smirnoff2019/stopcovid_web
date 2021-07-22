
import BaseService from './BaseService.js';

class GalleryContent extends BaseService {
	
	constructor() {
		super();

		this.imagesList = [];

		return this;
	}

	addImages( imagesList ) {
		isArray( imagesList, (e) => {
			this.imagesList.push(...imagesList);
		})

		return this;
	}

	getAllImages() {
		return this.imagesList;
	}

	findImage( searchId ) {
		const imagesList = this.getAllImages();

		return imagesList.filter(function(item, index, array) {
			return searchId === item.id;
		});
	}

}

export default new GalleryContent();
