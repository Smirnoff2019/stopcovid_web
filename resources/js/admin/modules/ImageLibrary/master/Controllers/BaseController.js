
class BaseController {

	constructor( ...args ) {
		this.boot( ...args );
	}

	boot( ...args ) {

	}

	callError( $message = 'An error has occurred!' ) {
		throw new Error( $message );
		return;
	}

}

export default BaseController;