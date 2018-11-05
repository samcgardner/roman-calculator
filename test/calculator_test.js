var assert = require('assert');
var evaluate = require('../src/calculator.js');

describe('Test roman calculator', function () {
    it('Performs simple addition', function () {
        assert.equal('II', evaluate('I + I'));
    });
    it('Performs subtraction', function () {
        assert.equal('I', evaluate('I - I'))
    });
    it('Performs multiplication', function () {
        assert.equal('VI', evaluate('II * III'))
    });
    it('Performs division', function () {
        assert.equal('II', evaluate('VI / III'))
    });
    it('Exponentiates', function () {
        assert.equal('IX', evaluate('III ^ II'))
    });
    it('Evaluates brackets first as required', function () {
        assert.equal('XV', evaluate('III * (III + II)'))
    })
});
