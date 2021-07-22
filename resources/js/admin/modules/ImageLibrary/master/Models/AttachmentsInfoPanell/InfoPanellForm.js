
import BaseModel from '../BaseModel.js';

import Widget from '../Widget.js';

import Image from './InfoPanellForm/Image.js';
import Link from './InfoPanellForm/Link.js';
import Title from './InfoPanellForm/Title.js';
import Description from './InfoPanellForm/Description.js';
import CreatedAt from './InfoPanellForm/CreatedAt.js';
import Name from './InfoPanellForm/Name.js';

const InfoPanellForm = (elem) => {

	const $this = elem || Widget.infoPanell.find( '#attachments-info-form' );

	BaseModel( $this );
	
	$this.imageSelector = '#attachments-info-image';
	$this.image = $this.find( $this.imageSelector );
	
	$this.titleSelector = '#attachments-info-title';
	$this.title = $this.find( $this.titleSelector );
	
	$this.descriptionSelector = '#attachments-info-description';
	$this.description = $this.find( $this.descriptionSelector );
	
	$this.linkSelector = '#attachments-info-link';
	$this.link = $this.find( $this.linkSelector );
	
	$this.createdAtSelector = '#attachments-info-created_at';
	$this.createdAt = $this.find( $this.createdAtSelector );
	
	$this.nameSelector = '#attachments-info-name';
	$this.name = $this.find( $this.nameSelector );
	
	$this.userSelector = '#attachments-info-user';
	$this.user = $this.find( $this.userSelector );
	
	$this.animationTime = 300;

	// ==============================================================
	// Methods
	// ==============================================================
	
		$this.showPanell = function( callback ) {

			$this.fadeIn( $this.animationTime );

			$this.callbackHandler( callback );

			return $this;
		}
	
		$this.hidePanell = function( callback ) {

			$this.fadeOut( $this.animationTime );

			$this.callbackHandler( callback );

			return $this;
		}
	
		$this.updateFormData = function( $elem ) {
			
			const state = $this.state;

			Image($this.image).setState( state );
			Link($this.link).setState( state );
			Title($this.title).setState( state );
			Description($this.description).setState( state );
			CreatedAt($this.createdAt).setState( state );
			Name($this.name).setState( state );

			return $this;
		}
	
	// ==============================================================

	$this.stateHandlers = [
		$this.updateFormData,
	];

	return $this;
};

export default InfoPanellForm();