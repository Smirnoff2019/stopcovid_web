function BaseModel( elem ) {

	elem.state = {};

	elem.stateHandlers = [];

	// ==============================================================
	// Methods
	// ==============================================================
		
		elem.callError = function( $message = 'An error has occurred!' ) {
			throw new Error( $message );
			return;
		}

		elem.setState = function( data, callback ) {
			
			for(const key in data) {
				elem.state[key] = data[key];
			}

			elem.stateHandler();
			
			elem.callbackHandler( callback );

			return elem;
		}

		elem.stateHandler = function( callback ) {
			
			[...elem.getStateHandlers()].map((item) => {
				item( elem );
			});

			elem.callbackHandler( callback );

			return elem;
		}

		elem.callbackHandler = function( callback, ...args ) {

			isFunction( callback, () => { 
				const _args = [...args].length > 0 ? [...args] : [elem];
				callback( ..._args );
			});

			return elem;
		}

		elem.getStateHandlers = function() {
			return this.stateHandlers;
		}
	
	// ==============================================================

	return elem;
}

export default BaseModel;