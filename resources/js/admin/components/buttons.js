;(($) => {

	(() => {

		$('.js-iconSection-collapse').each((index, item) => {
			$(item).click(function(e) {
				e.preventDefault();

				const id = $(this).attr('href');
					$(id).slideToggle(250);

				$(this).find('i').toggleClass('fa-angle-down fa-angle-up');
			})
		})

	})();

	(() => {
		const sidebarSections = $('.main-sidebar .sidebar-section.treeview');

		sidebarSections.each((index, item) => {
			const $head = $(item).find('.head');
			const $body = $(item).find('.body');
			
			if(!$(item).hasClass('active')) {
				$body.slideUp(0);
			}

			$head.click(function(e) {
				console.log("e", e);
				$(item).toggleClass('active')
				$body.slideToggle(300);
					console.log("$(item)", $(item));
			})
		})

	})();

	(() => {
		$('a[href="#"]').each((index, item) => {
			
			$(item).click((e) => e.preventDefault())
			
		})

	})();

	(() => {
		$('.js-close-btn').each((index, item) => {
			
			$(item).click(function(e) {
				e.preventDefault();
				$($(this).data('close')).fadeOut(300);
			})
			
		})
	})();

	(() => {
		$('.rainbow-box .code-header .controlls').each((index, item) => {
			$(item).click(function() {
				$(this)
					.closest('.rainbow-box')
					.find('code')
					.slideToggle(300)
			})
		})
	})();

	(() => {
  		$('#render-media-library').ImagesLibrary(( request ) => {
  			console.log("ImagesLibrary request", request);
  		});
	})();

	(() => {
  		$('.js-click-triger-btn').on('click input', function( event ) {
  			event.preventDefault();
  			const trigerElemId = $(this).data('trigerid');
  			console.log("trigerElemId", trigerElemId);
  			$(`#${trigerElemId}`).click();
  		});
	})();

})(jQuery);

