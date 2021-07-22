// [
// 	{
// 		name:'getTypeName',
// 		fun: getTypeName
// 	},
// 	{
// 		name:'checkValuesByType',
// 		fun: checkValuesByType
// 	},
// 	{
// 		name:'checkValueType',
// 		fun: checkValueType
// 	},
// 	{
// 		name:'isArray',
// 		fun: isArray
// 	},
// 	{
// 		name:'isFunction',
// 		fun: isFunction
// 	},
// 	{
// 		name:'isObject',
// 		fun: isObject
// 	},
// 	{
// 		name:'isString',
// 		fun: isString
// 	},
// 	{
// 		name:'isNumber',
// 		fun: isNumber
// 	},
// ]

function getTypeName( value ) {
	let regex = /^\[object (\S+?)\]$/;
	const matches = Object.prototype.toString.call(value).match(regex) || [];

	return (matches[1] || 'undefined').toLowerCase();
}

function checkValuesByType( typeName, values ) {
	if(typeName) {
		const result = [...values].reduce(function( previousValue, value, index, array ) {
			const res = getTypeName( value ) == typeName ? 0 : -1;
			return previousValue += res;
		}, 0)

		return result >= 0;
	}
	throw new Error( 'typeName not found!' );
}

function checkValueType( typeName, value ) {
	if(typeName) {
		return getTypeName( value ) === typeName;
	}
	throw new Error( 'typeName not found!' );
}

function createHelperFunction( typeName ){
	const fName = `is${typeName}`;
	const rTypeName = typeName.toLowerCase();

	return window[fName] = ( value, callback, ...args ) => {
		const result = checkValueType( rTypeName, value );
		
		if( result && checkValueType( 'function', callback ) ) {
			callback( ...args );
		}

		return result;
	};

	return typeName;
};

var helpers = {};

const _helpers = [
	'Array',
	'Function',
	'Object',
	'String',
	'Number',
	'Boolean',
].map(( typeName ) => {
	const f = createHelperFunction( typeName );
	helpers[`is${typeName}`] = f;
	return f;
});

export default helpers;

