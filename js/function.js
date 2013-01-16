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
	this.getOptions = function () {
		return oOptions;
	};

	/**
	 * @public
	 */
	this.init = function () {
		privateMethod();
	};

	/**
	 * @public
	 * @param value
	 */
	this.setBPrivate = function (value) {
		bPrivate = value;
	};

	/**
	 * @public
	 */
	this.getBPrivate = function () {
		return bPrivate;
	};

	/**
	 * @private
	 */
	var privateMethod = function () {
		console.log('private', 'privateFunction');
	};

};

/*
 var cMyClass = new cFunctionBasedClass();

 cMyClass.setOptions(
 {
 one:'one',
 two:'two'
 }
 );

 cMyClass.init();

 */
/* works *//*

 console.log(cMyClass.bPublic);

 */
/* wont work *//*

 console.log(cMyClass.bPrivate);*/
