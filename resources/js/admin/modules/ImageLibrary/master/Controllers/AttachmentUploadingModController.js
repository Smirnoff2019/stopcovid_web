
import BaseController from './BaseController.js';

class AttachmentUploadingModController extends BaseController {

	constructor( attachmentItem ) {
		super( attachmentItem );

		this.attachment = attachmentItem;
		this.progressValue = 0;

		return this;
	}

	boot( attachmentItem ) {
		attachmentItem.setUploadingStatus();
	
		return this;
	}

	start() {
		const $item = this.attachment;
		$item.setUploadingStatus();
		this.progressProcessing();

		return this;
	}

	stop() {
		const $item = this.attachment;
		const $progressLine = $item.find('.progress-line');
		
		this.stopUploadingProgress();
		
		$progressLine.css({width: `100%`});
		
		setTimeout(() => {
			$item.removeUploadingStatus();
		}, 200);
		
		return this;
	}

	handError() {
		const $item = this.attachment;
		$item.setError();

		return this;
	}

	progressProcessing() {
		const $item = this.attachment;
		const $progressLine = $item.find('.progress-line');
		const speed = 50;
		const limit = 95;

		this.timer = setInterval( () => {
			
			if( this.progressValue < limit ) {
				$progressLine.css({width: `${++this.progressValue}%`});
			} else {
				this.stopUploadingProgress();
			}

		}, speed );
	
		return this;
	}

	stopUploadingProgress() {
		clearInterval(this.timer);

		return this;
	}

	updateState( data ) {
		this.attachment.setState(data);
		return this;
	}


}

export default AttachmentUploadingModController;