const assert = require('assert');
const myLibrary = require('..');

describe('Buffer package\'s category tests', function () {
    describe('\'is-buffer\' package', function() {
        it('Should return ftrue for a buffer object', function() {
            myLibrary.buffer['is-buffer'](new Buffer(4));
        });
    });
});