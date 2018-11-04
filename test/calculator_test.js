var assert = require('assert');
var evaluate = require('../src/calculator.js');

describe('Test roman calculator', function () {
    it('Performs simple addition', function () {
        assert.equal('II', evaluate('I + I'));
    });
});
