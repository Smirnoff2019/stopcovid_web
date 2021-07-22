
import AjaxService from './AjaxService.js';
import BaseService from './BaseService.js';

class GalleryContentLoadingService extends BaseService {
	
	constructor() {
		super();

		const url = $('meta[name="media-images-action"]').prop('content');

		this.url = url;
		this.current_page = 1;
		this.last_page = 1;
		this.first_page_url = null;
		this.next_page_url = null;
		this.last_page_url = null;
	}

	isCanLoad() {
		return this.current_page < this.last_page;
	}

	updateDataState( data ) {
		const { 
			current_page, 
			last_page, 
			first_page_url, 
			next_page_url,
			last_page_url
		} = data;

		this.current_page = current_page;
		this.last_page = last_page;
		this.first_page_url = first_page_url;
		this.next_page_url = next_page_url;
		this.last_page_url = last_page_url;
	}

	loadFirstPage( callback ) {
		const url = this.url;
		const Ajax = new AjaxService( url );

		Ajax.get( null, (request) => {

			this.updateDataState( request );

			isFunction( callback, ( args ) => { 
				callback( request ) 
			});
		
		} );

	}

	loadNextPage( callback, failCallback ) {
		if(!this.isCanLoad()) {
			isFunction( failCallback, ( args ) => { 
				failCallback( this.isCanLoad() );
			});
			return false;
		}

		const url = this.next_page_url;
		const Ajax = new AjaxService( url );

		Ajax.get( null, (request) => {

			this.updateDataState( request );

			isFunction( callback, ( args ) => { 
				callback( request ) 
			});
		
		}, failCallback );

	}

}

export default new GalleryContentLoadingService();
