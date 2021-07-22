
import BaseService from './BaseService.js';

class AppRequestService extends BaseService {
	
	constructor() {
		super();

		this.requestCallbacks = [];

	}

	addHandler( callback ) {
		isFunction( callback, () => {
			this.requestCallbacks.push( callback );
		})

		return this;
	}

	pushRequest( data ) {
		[...this.requestCallbacks].map(( callback ) => {
			callback( data );
		});

		return this;
	}

}

export default new AppRequestService();