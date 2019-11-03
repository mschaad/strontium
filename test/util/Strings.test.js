define(['mocha', 'chai', 'Strings'], function(mocha, chai, Strings) {
	var assert = chai.assert;
	
	var ok = assert.ok,
		deepEqual = assert.deepEqual,
		equal = assert.equal;
	
	var suite = mocha.suite, test = mocha.test;

	suite("Strings", function () {
		suite("isString", function() {
			test('returns true for literal string', function() {
				assert.isTrue(Strings.isString("foo"));
			});
	
			test('returns true for new String()', function() {
				assert.isTrue(Strings.isString(new String("foo")));
			});
		})
    });
});