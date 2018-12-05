const assert = require('assert');
const myLibrary = require('..');

describe('Array package\'s category tests', function () {
    describe('\'array-filter\' native packages', function () {
        it('Should return true for empty filtered array', function () {
            let filteredArray = myLibrary.array['array-filter']([1, 2, 3], function (el, i, arr) {
                return false;
            });
            assert.equal(filteredArray.length, 0);
        });
    });
});
