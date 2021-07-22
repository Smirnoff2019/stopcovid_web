
import BaseService from './BaseService.js';

class AjaxService extends BaseService {
	
	constructor( url ) {
		super();

		this.url = url;

		this.requestHooks = [];
	}

	post( data = null, ...callbacks ) {
		const config = {
			url: this.url,
			method: 'post',
			data: data
		};

		this._ajax(config, ...callbacks);

		return this;
	}

	get( data = null, ...callbacks ) {
		const config = {
			url: this.url,
			method: 'get',
			data: data
		};
		
		this._ajax(config, ...callbacks);

		return this;
	}

	request( callback = (e)=>{} ) {
		isFunction( callback, () => {
			this.requestHooks.push( callback );
		})

		return this;
	}

	_doRequestHooks( ...args ) {
		[...this.requestHooks].map( callback => this._doCallback( callback, ...args ) );
	
		return this;
	}

	_doCallback( callback = ()=>{}, ...args ) {
		isFunction( callback, () => {
  			callback( ...args );
		})
	
		return this;
	}

	_ajax( config, ...callbacks ) {

		const { url, method, data } = config;
		const [ doneCallback, failCallback, alwaysCallback ] = [...callbacks];

		jQuery.ajax({
    		url: url, 
			type: method || "GET", 
			dataType: 'json', 
      		contentType: false, 
      		processData: false, 
      		data: data || null
    	})
	  	.done(( ...args ) => {

	  		this._doCallback( doneCallback, ...args );
	  		this._doRequestHooks( ...args );
	  
	  	})
	  	.fail(( ...args ) => {
	  		
	  		this._doCallback( failCallback, ...args );
	  		this._doRequestHooks( ...args );
	 
	  	})
	  	.always(( ...args ) => {
	  	
	  		this._doCallback( alwaysCallback, ...args );
	  		this._doRequestHooks( ...args );
	  
	  	});

		return this;

	}

}

export default AjaxService;