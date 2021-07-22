
import BaseService from './BaseService.js';

class InputFilesCatcher extends BaseService {
	
	constructor( event ) {
		super();

		this.findFiles( event );

		return this;
	}

	findFiles( event ) {
	  	this.filesData = event.target;
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

export default InputFilesCatcher;
