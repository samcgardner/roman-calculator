var romans = require('roman-numerals');

const numeralRegex = '[IVXLCDM]+'
const exponentRegex = '\^'

module.exports = function (input) {
    parsedInput = input.replace(numeralRegex, (string) => romans.toArabic(string))
    inputWithExponentsReplaced = parsedInput.replace(exponentRegex, '**')
    result = eval(inputWithExponentsReplaced)
    return romans.toRoman(result)
};