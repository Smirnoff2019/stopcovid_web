
import BaseService from './BaseService.js';

class DropFilesCatcher extends BaseService {
	
	constructor( event ) {
		super();

		this.findFiles( event );

		return this;
	}

	findFiles( event ) {
	  	this.filesData = event.originalEvent.dataTransfer;
	  	this.fileList = this.filesData.files;

		return this;
	}

	getFiles() {
		return this.fileList;
	}

	getData() {
		return this.filesData;
	}

}

export default DropFilesCatcher;
