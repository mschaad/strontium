define(['Strings'], function(Strings) {
    var Test = {
        isUndefined: function(value) {
            return typeof(value) === 'undefined';
        },
        isNull: function(value) {
            return value === null;
        },
        isValue: function(value) {
            if (Test.isNull(value) || Test.isUndefined(value)) {
                return false;
            }
            return true;
        },
        isString: function(value) {
            return Strings.isString(value);
        },
        isObject: function(value) {
            if (value === null) {
                return false;
            }
            return typeof value === 'object';
        },
        instanceOf: function(value, objType) {
            if (!Test.isValue(value)) {
                return false;
            }
            return value instanceof objType;
        },
        isFunction: function(value) {
            return value instanceof Function;
        }
    };
    return Test;
});