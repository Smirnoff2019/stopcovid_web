
function GalleryItemComponent( itemData ) {

	const { id, url, title, description } = itemData;
		
	return $('<li>')
		.addClass('attachment')
		.attr('role', 'radio')
		.attr('data-id', id)
		.append(() => { return [

				$('<div>')
					.addClass('attachment-preview')
					.append(() => { return [

						$('<div>')
							.addClass('thumbnail')
							.append(() => {

								return $('<div>')
									.addClass('centered')
									.append(() => {
										
										return $('<img>')
											.attr('src', url)
											.attr('alt', '')

									})
								
							}),

						$('<div>')
							.addClass('uploading-progress')
							.append(() => {
								return $('<div>')
									.addClass('progress-field')
									.append(() => {
										return $('<div>')
											.addClass('progress-line')
									})
							})

						]

					}),

				$('<button>')
					.addClass('check fa fa-check')

			]
		})
}

export default GalleryItemComponent;