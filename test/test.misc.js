const assert = require('assert');
const myLibrary = require('..');

describe('Misc package\'s category tests', function () {
    describe('\'files/ext-list\' package', function() {
        it('Should return a list of valid MIME types', function() {
            const listOfMimeTypes = myLibrary.misc.file['ext-list']();
            for(const key in Object.keys(listOfMimeTypes)) {
                const val = listOfMimeTypes[key];
                assert.equal(typeof(val) == 'string', true);
            }
        });
    });

    describe('\'hashing/shasum\' package', function() {
        it('Should return a SHA-1 of a string', function() {
            assert.equal(typeof(myLibrary.misc.hashing['shasum']('claim')) == 'string', true);
        });
    });

    describe('\'html/html-tags\' package', function() {
        it('Should return a list of html tags', function() {
            assert.equal(myLibrary.misc.html['html-tags'].length > 0, true);
        });
    });

    describe('\'library/ansi\' package', function() {
        it('Should load a module for ansi-color', function() {
            const color = myLibrary.misc.library.ansi['ansi-gray'];
            assert.equal(typeof(color) == 'function', true);
        });
    });

    describe("\'library/karma\' example test", function () {
        it("Loading module", function() {
            const karma = myLibrary.misc.library.karma['karma-sinon'];
            assert.ok(typeof(karma) == 'object', true);
        });
    });

    describe("\'library/babel\' example test", function () {
        it("Loading module", function() {
            const babel = myLibrary.misc.library.babel['babel-plugin-syntax-do-expressions'];
            assert.ok(typeof(babel) == 'function', true);
        });
    });

    describe("\'library/broccoli\' example test", function () {
        it("Loading module", function() {
            const broccoli = myLibrary.misc.library.broccoli['broccoli-unwatched-tree'];
            assert.ok(typeof(broccoli) == 'function', true);
        });
    });

    describe("\'library/coffeescript\' example test", function () {
        it("Loading module", function() {
            const coffeescript = myLibrary.misc.library.coffeescript['coffeescript'];
            assert.ok(typeof(coffeescript) == 'object', true);
        });
    });

    describe("\'library/ember\' example test", function () {
        it("Loading module", function() {
            const ember = myLibrary.misc.library.emberjs['ember-cli-inject-live-reload'];
            assert.ok(typeof(ember) == 'object', true);
        });
    });
});