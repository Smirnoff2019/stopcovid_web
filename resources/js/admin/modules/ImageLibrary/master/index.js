
// Helpers
import Helpers from './Helpers/CheckTypeHelper.js';

// Services
import AppRequestService from './Services/AppRequestService.js';

// Providers
import AppProvider from './Providers/AppProvider.js';


(($) => {

	function App( appRequestCallback ) {
		
		AppRequestService.addHandler( appRequestCallback );
		new AppProvider();

	}

	jQuery.fn.ImagesLibrary = function( callback ) {
		return this.each((index, item) => {
				
			$(item).on('click input', function(e) {
				e.preventDefault();
				
				App( callback );

			})

		}); 
	};

	jQuery.fn.startImagesLibrary = function( callback ) {
		return this.each((index, item) => {
				
			App( callback );

		}); 
	};

})(jQuery);