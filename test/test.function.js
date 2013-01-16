var cMyClass = new cFunctionBasedClass();

test("Checking class", function () {
	ok(cMyClass, "cMyClass exists");
});

test("Checking public methods", function () {
	ok(cMyClass.init, "cMyClass.init is public and exists");
	ok(cMyClass.setOptions, "cMyClass.setOptions is public and exists");
	ok(cMyClass.getOptions, "cMyClass.getOptions is public and exists");
	ok(cMyClass.setBPrivate, "cMyClass.setBPrivate is public and exists");
	ok(cMyClass.getBPrivate, "cMyClass.getBPrivate is public and exists");
});

test("Checking private methods === undefined", function () {
	strictEqual(cMyClass.bPrivate, undefined, "cMyClass.bPrivate is not visible, must be private");
	strictEqual(cMyClass.privateMethod, undefined, "cMyClass.privateMethod is not visible, must be private");
});

test("check public property cMyClass.bPublic", function () {
	deepEqual(cMyClass.bPublic, true, "cMyClass.bPublic is true");
});
test("change public property cMyClass.bPublic directly to false", function () {
	cMyClass.bPublic = false;
	deepEqual(cMyClass.bPublic, false, "cMyClass.bPublic is false");
});

test("return cMyClass.setOptions", function () {
	deepEqual(cMyClass.getOptions(), {one:1, two:2}, "cMyClass.getOptions return {one: 1, two: 1}");
});

test("cMyClass.setOptions ({one: \"one\", two: \"two\"})", function () {
	cMyClass.setOptions(
			{
				one:'one',
				two:'two'
			}
	);
	deepEqual(cMyClass.getOptions(), {one:"one", two:"two"}, "cMyClass.getOptions return {one: \"one\", two: \"two\"}");
});