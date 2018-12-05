const assert = require('assert');
const myLibrary = require('..');

describe('Filesystem package\'s category tests', function () {
    describe('\'basename\' package', function() {
        it('Should return a string containing the base file name \'file\'', function() {
            assert.equal(myLibrary.filesystem['basename']('path/to/file.txt'), 'file');
        });
    });
});