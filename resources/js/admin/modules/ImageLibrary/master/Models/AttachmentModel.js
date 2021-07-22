
import BaseModel from './BaseModel.js';
import AttachmentsGallery from './AttachmentsGallery.js';
import AttachmentsInfoPanell from './AttachmentsInfoPanell.js';

const AttachmentModel = (elem) => {

	const $this = elem;

	BaseModel( $this );

	$this.classList = {
		selected: 	'selected',
		uploading: 	'uploading',
		error: 		'error'
	};
	
	$this.selectedStatus = $this.hasClass( $this.classList.selected );
	$this.untouchable = false;

	// ==============================================================
	// Methods
	// ==============================================================

		$this.isSelected = function( callback ) {
			if($this.selectedStatus){
				$this.callbackHandler( callback );
			} 

			return $this.selectedStatus;
		}

		$this.isUntouchable = function( callback ) {
			if($this.untouchable){
				$this.callbackHandler( callback );
			} 

			return $this.untouchable;
		}

		$this.select = function( callback, time = 300 ) {
			const className = $this.classList.selected;

			const activeStatus = $this.hasClass( $this.classList.selected );

			AttachmentsGallery.itemsList(( itemsList ) => {
				itemsList.each((index, item) => {

					const $item = AttachmentModel( $(item) );
					$item.unselect();

				})
			});

			if(activeStatus) {
				$this.removeClass( className );
				$this.selectedStatus = false;
			} else {
				$this.addClass( className );
				$this.selectedStatus = true;
			}

			$this.callbackHandler( callback );
			
			return $this;
		}
	
		$this.unselect = function( callback, time = 300 ) {
			const className = $this.classList.selected;

			$this.removeClass( className );
			$this.selectedStatus = false;

			$this.callbackHandler( callback );
			
			return $this;
		}
	
		$this.bindSelect = function( callback, time = 300 ) {
			
			if($this.selectedStatus) {
				$this.select();
			} else {
				$this.unselect();
			}
			
			$this.callbackHandler( callback );
			return $this;
		}

		$this.formatStateDataToRequest = function() {
			const { id, title, description, name, format, url } = $this.state;

			return {
				id: 			id,
				title: 			title,
				description: 	description,
				name: 			name,
				format: 		format,
				url: 			url,
			};
		}

		$this.setUploadingStatus = function( callback ) {

			$this.untouchable = true;

			$this.addClass( $this.classList.uploading );

			$this.callbackHandler( callback );
			return $this;
		}

		$this.removeUploadingStatus = function( callback ) {

			$this.untouchable = false;

			$this.removeClass( $this.classList.uploading );

			$this.callbackHandler( callback );
			return $this;
		}

		$this.setError = function( callback ) {

			$this.untouchable = true;

			$this.removeClass( $this.classList.selected );
			$this.removeClass( $this.classList.uploading );
			$this.addClass( $this.classList.error );

			$this.callbackHandler( callback );
			return $this;
		}

	// ==============================================================

	return $this;
};

export default AttachmentModel;