const assert = require('assert');
const myLibrary = require('..');

describe('Function package\'s category tests', function () {
    describe('\'arr-filter\' package', function() {
        it('Should return an array with 3 elements', function() {
            assert.equal(myLibrary.function['arr-filter'](['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'], function (ele) {
                return typeof ele === 'string';
              }).length, 3);
        });
    });
});