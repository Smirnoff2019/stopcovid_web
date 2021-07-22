;(($) => {

	// ClipboardJS
	// Подробнее => https://itchief.ru/lessons/javascript/javascript-clipboard 
	const clipboard = new ClipboardJS('.js-btn-clipboard')
		.on('success', function(e) {
		  $(e.trigger).find('.clipboard-status').addClass('active');
		  e.clearSelection();
		})
		.on('error', function(e) {
		  console.error('Действие:', e.action);
		  console.error('Триггер:', e.trigger);
		});

})(jQuery);