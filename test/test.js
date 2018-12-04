const assert = require('assert');
const myLibrary = require('..');

describe('trivial-packages-library', function() {
    describe('isarray', function() {
        it('should raise an error if library was not present', function() {
            assert.equal(myLibrary.array.isarray(['This', 'is', 'a', 'small', 'module', 'test']), true);
        });
    });

    describe('path-exists', function() {
        it('should raise an error if library was not present', function(done) {
            // this.timeout(0);
            myLibrary.filesystem['path-exists']('index.js')
            .then(function(exists) {
                assert.equal(exists, true);
                done();
            });
        });
    });

    describe('Biblioteca Lodash', function() {
        it('Método isarray deve retornar true para vetor Javascript', function() {
            assert.equal(myLibrary.misc.library.lodash['lodash.isarray'](['This', 'is', 'a', 'small', 'module', 'test']), true);
        });
    });
});