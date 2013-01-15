/**
 * Function based javsacript class template
 *
 * @author Toni Ivanisevic
 */

var cFunctionBasedClass = function () {

	/**
	 * @public
	 * @type {Boolean}
	 */
	this.bPublic = true;

	/**
	 * @private
	 * @type {Boolean}
	 */
	var bPrivate = true;

	/**
	 * @private
	 * @type {Object}
	 */
	var oOptions = {
		one:1,
		two:2
	};

	/**
	 * @public
	 * @param oInitOptions
	 */
	this.setOptions = function (oInitOptions) {
		for (var prop in oInitOptions) {
			oOptions[prop] = oInitOptions[prop];
		}
	};

	/**
	 * @public
	 */
	this.init = function () {
		console.log('public', 'this.init');
		privateFunction();
	};

	/**
	 * @private
	 */
	var privateFunction = function () {
		console.log('private', 'privateFunction');
	};

};

var cMyClass = new cFunctionBasedClass();

cMyClass.setOptions(
		{
			one:'one',
			two:'two'
		}
);

cMyClass.init();

/* works */
console.log(cMyClass.bPublic);

/* wont work */
console.log(cMyClass.bPrivate);