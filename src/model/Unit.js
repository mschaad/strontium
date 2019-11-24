define(['Guard', 'UnitType', 'Term', 'Dimensions'], 
	function(Guard, UnitType, Term, Dimensions) {
		function Unit(name, symbol, scale) {
			Guard(name, "name").isString().isTruthy();
			this.name = name;
			Guard(symbol, "symbol").isString().isTruthy();
			this.symbol = symbol;
			Guard(scale, "scale").isNumber().isNotZero();
			this.scale = scale;
		}

		Unit.prototype = {
			dimensions: function() {
				throw new Error("the dimensions method must be overridden.");
			},
			expression: function() {
				throw new Error("the expression method must be overridden.");
			},
			isBaseUnit: function() {
				throw new Error("the isBaseUnit method must be overridden.");
			},
			toString: function() {
				return this.symbol;
			}
		};

		Unit.isUnit = function(value) {
			return (value instanceof Unit);
		};

		return Unit;
	}
);