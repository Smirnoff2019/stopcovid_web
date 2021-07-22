
import BaseController from './BaseController.js';
import UploadFilesController from './UploadFilesController.js';

import GalleryContent from '../Services/GalleryContent.js';
import DropFilesCatcher from '../Services/DropFilesCatcher.js';
import InputFilesCatcher from '../Services/InputFilesCatcher.js';

import AttachmentsGallery from '../Models/AttachmentsGallery.js';
import Widget from '../Models/Widget.js';
import DragAndDropArea from '../Models/DragAndDropArea.js';

class DragAndDropController extends BaseController {

	constructor() {
		super();
	}

	boot() {

		this.dragSection = Widget.find('.media-modal-drag-area');

		this.dragLeaveArea = Widget.find('.drag-area-border');
		this.dragOverArea = Widget.find('.media-modal-frame');
		this.dropArea = this.dragLeaveArea;
		this.body = $('body');
		// this.fileInput = $('#attachment-image-input');

		this.clearFixEvents();
		this.dragOverEventObserver();
		this.dragLeaveEventObserver();
		this.dropEventObserver();

	}

	dragOverEventObserver() {

		this.dragOverArea.on( 'dragenter dragover', (event) => { 
		
			DragAndDropArea.showArea();
		
		} );

		return this;
	}

	dragLeaveEventObserver() {
		
		this.dragLeaveArea.on( 'dragleave drop', (event) => { 

			DragAndDropArea.hideArea();

		} );

		return this;
	}

	dropEventObserver() {
		
		this.dropArea.on( 'drop', ( event ) => { 

			const files = new DropFilesCatcher(event).getFiles();
			console.log("files", files);

			const uploadFilesController = new UploadFilesController( files );
			
			Widget.find('#media-modal-library-tab').click();

		});

		return this;
	}

	clearFixEvents() {
		
		['dragenter', 'dragover', 'dragleave', 'drop'].forEach( eventName => {
		  	this.dragLeaveArea.on( eventName, (event) => {
		  		this.preventDefaultsHandler(event);
		  	});
		  	this.dragOverArea.on( eventName, (event) => {
		  		console.log("clearFixEvents dragOverArea event", event);
		  		this.preventDefaultsHandler(event);
		  	});
		  	this.body.on( eventName, (event) => {
		  		this.preventDefaultsHandler(event);
		  	});
		});

		return this;
	}

	preventDefaultsHandler( event ) {
	  	event.preventDefault();
	  	event.stopPropagation();
	
		return this;
	}


}

export default DragAndDropController;