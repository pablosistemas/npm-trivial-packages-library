const assert = require('assert');
const myLibrary = require('..');

describe('Boolean package\'s category tests', function () {
    describe('\'is-boolean-object\' package', function() {
        it('Should return false for non-boolean values and true for boolean values', function() {
            assert.equal(myLibrary.boolean['is-boolean-object'](undefined), false);
            assert.ok(myLibrary.boolean['is-boolean-object'](false));
        });
    });
});