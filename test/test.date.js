const assert = require('assert');
const myLibrary = require('..');

describe('Date package\'s category tests', function () {
    describe('\'date-time\' package', function() {
        it('Should return a string containing a pretty datetime', function() {
            assert.equal(typeof(myLibrary.date['date-time']()) == 'string', true);
        });
    });
});