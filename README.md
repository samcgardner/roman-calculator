# Roman-Calculator  
Implements a simple library that provides a calculator which evaluates arithmetic expressions using Roman numerals. Relies on the `eval` function, so is _not_ safe
to use with untrusted input.

# Setup
Install the dependencies by running `yarn install`. Tests can be executed with `yarn test`.

# Example Usage
```javascript
const evaluate = require('./calculator.js')

println(evaluate('I + I'))
```