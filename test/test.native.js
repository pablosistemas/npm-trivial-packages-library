const assert = require('assert');
const myLibrary = require('..');

describe('Native package\'s category tests', function () {
    describe('\'is-empty\' native packages', function () {
        it('Should return true for empty array', function () {
            assert.equal(myLibrary.native['is-empty']([]), true);
        });
    });
});
