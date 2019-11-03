define("Guard", ['Strings'], function(Strings) {
	function Guard(value, name) {
		function getErrorMessage(args) {
			return name + 
				" should have been " + 
				args.expectedString +
				", but found value '" + value + 
				"'";
		}

		function getError(expectedString) {
			return new Error(
				getErrorMessage({ expectedString: expectedString })
			);
		}

		var that = {
			instanceOf: function(objType) {
				if (!(value instanceof objType)) {
					throw getError("an instance of " + objType.name);
				}
			},
			isString: function() {
				if (!Strings.isString(value)) {
					throw getError("a String");
				}
				return that;
			},
			isTruthy: function() {
				if (!value) {
					throw getError("a truthy value");
				}
				return that;
			},
			isArray: function() {
				if (!Array.isArray(value)) {
					throw getError("an array");
				}
				return that;
			},
			isArrayOf: function(objType) {
				that.isArray();
				var firstErrorIndex = value.findIndex(function(element, idx) {
					return !(element instanceof objType);
				});
				if (firstErrorIndex > -1) {
					var badElement = value[firstErrorIndex];
					throw new Error(name + " should have been an array of " + objType.name + ", but found '" + badElement + "' at index " + firstErrorIndex);
				}

				return that;
			},
			isNumber: function() {
				if (!isNaN(parseFloat(value)) && isFinite(value)) {
					return that;
				} 
				else {
					throw new Error(name + " should have been a Number, but found value '" + value + "'");
				}
			},
			isNotZero: function() {
				if (value === 0) {
					throw new Error(name + " should have not have been zero, but found value '" + value + "'");
				}
				return that;
			}
		};

		return that;
	}
	
	return Guard;
});