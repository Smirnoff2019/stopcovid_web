
import BaseModel from '../../BaseModel.js';

import Widget from '../../Widget.js';
import MediaFrameSettingsMenu from '../../MediaFrameSettingsMenu.js';
import AttachmentsGallery from '../../AttachmentsGallery.js';
import AttachmentColumns from '../AttachmentColumns.js';

const TypesField = (elem) => {

	const $this = elem || AttachmentColumns.find('#select-attachment-columns');

	BaseModel($this);

	$this.types = [
		{
			value: 'attachment-columns-lv1',
			title: 'Мелкие иконки'
		},
		{
			value: 'attachment-columns-lv2',
			title: 'Средние иконки'
		},
		{
			value: 'attachment-columns-lv3',
			title: 'Большие иконки'
		},
	];

	$this.state = {
		type: 0,
	}

	// ==============================================================
	// Methods
	// ==============================================================

		$this.renderTypesOptions = function( callback ) {
			const { type:activeType } = $this.state;
			const typesList = $this.types;

			const optionsList = [...typesList].map(( type, index ) => {
				const { title, value } = type;
				const selected = index === activeType;

				return $this.renderOption({
					title: title,
					value: index,
					selected: selected
				});

			});
			
			$this.callbackHandler( callback );
			return $this;
		}

		$this.renderOption = function( data ) {
			const { title, value, selected } = data;
			const $option = $('<option>')
				.attr('value', value)
				.attr('selected', selected)
				.text(title);

			$this.append( $option );

			return $option;
		}

		$this.getTypeClassName = function( value ) {
			return $this.types[+value];
		}

		$this.eachTypes = function( callback ) {
			const typesList = $this.types;

			[...typesList].map(( type ) => {
				const { value:className } = type;
				$this.callbackHandler( callback, className );
			});

			return $this;
		}

	// ==============================================================

	$this.stateHandlers = [
	];

	return $this;
};

export default TypesField();