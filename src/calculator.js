var romans = require('roman-numerals');

const numeralRegex = /[IVXLCDM]+/g
const exponentRegex = /\^/g

module.exports = function (input) {
    parsedInput = input.replace(numeralRegex, (string) => romans.toArabic(string))
    inputWithExponentsReplaced = parsedInput.replace(exponentRegex, '**')
    result = eval(inputWithExponentsReplaced)
    if (!Number.isInteger(result)) {
        return 'Sorry, it looks like you passed in an invalid calculation string'
    }
    return romans.toRoman(result)
};