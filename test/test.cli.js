const assert = require('assert');
const myLibrary = require('..');

describe('CLI package\'s category tests', function () {
    describe('\'os-name\' package', function() {
        it('Should return a string containing the OS name', function() {
            assert.equal(typeof(myLibrary.cli['os-name']()) == 'string', true);
        });
    });
});