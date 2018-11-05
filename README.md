# Roman-Calculator  
Implements a simple library that provides a calculator which evaluates arithmetic expressions using Roman numerals. Relies on the `eval` function, so is _not_ safe
to use with untrusted input. 

# Example Usage
```javascript
const evaluate = require('./calculator.js')

println(evaluate('I + I'))
```