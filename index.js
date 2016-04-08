/* eslint-disable max-len */

module.exports = {
  'parserOptions': {
    'ecmaVersion': 6,           // the version of ECMAScript you want to use
    'ecmaFeatures': {
      'globalReturn': false,    // allow return statements in the global scope
      'jsx': false              // enable JSX
    }
  },

  'env': {
    'browser': false,     // browser global variables
    'worker': false,      // web workers global variables.
    'node': true,         // Node.js global variables and Node.js-specific rules
    'amd': false,         // defines require() and define() as global variables as per the amd spec
    'mocha': false,       // adds all of the Mocha testing global variables
    'jasmine': false,     // adds all of the Jasmine testing global variables for version 1.3 and 2.0
    'phantomjs': false,   // phantomjs global variables
    'jquery': false,      // jquery global variables
    'prototypejs': false, // prototypejs global variables
    'shelljs': false,     // shelljs global variables
    'meteor': false,      // meteor global variables.
    'mongo': false,       // mongo global variables.
    'applescript': false, // applescript global variables.
    'es6': true           // enable all ECMAScript 6 features except for modules.
  },

  'globals': {
    // e.g. 'angular': true
  },

  'plugins': [
    'hapi',
    'promise'
  ],

  'rules': {
    // hapi
    'hapi/hapi-capitalize-modules': 2,  // enforce the capitalization of imported module variables
    'hapi/hapi-for-you': 2,             // restrict iterator variable names, and nesting
    'hapi/hapi-scope-start': 0,         // enforce new line at the beginning of function scope
    'hapi/no-arrowception': 2,          // prevent arrow functions that implicitly create arrow functions

    // promise
    'promise/param-names': 2,   // enforce standard parameter names for Promise constructors
    'promise/always-return': 2, // Ensure that inside a then() you make sure to return a new promise or value
    'promise/always-catch': 0,  // Deprecated
    'promise/catch-or-return': 2,  // Ensure that each time a then() is applied to a promise, a catch() is applied as well. Exceptions are made if you are returning that promise.

    // Possible Errors
    'comma-dangle': [2, 'never'],               // disallow trailing commas in object literals
    'no-cond-assign': 2,                        // disallow assignment in conditional expressions
    'no-console': 1,                            // disallow use of console (off by default in the node environment)
    'no-constant-condition': 2,                 // disallow use of constant expressions in conditions
    'no-control-regex': 2,                      // disallow control characters in regular expressions
    'no-debugger': 2,                           // disallow use of debugger
    'no-dupe-args': 2,                          // disallow duplicate arguments in functions
    'no-dupe-keys': 2,                          // disallow duplicate keys when creating object literals
    'no-duplicate-case': 2,                     // disallow a duplicate case label
    'no-empty-character-class': 2,              // disallow the use of empty character classes in regular expressions
    'no-empty': 2,                              // disallow empty statements
    'no-ex-assign': 2,                          // disallow assigning to the exception in a catch block
    'no-extra-boolean-cast': 2,                 // disallow double-negation boolean casts in a boolean context
    'no-extra-parens': 2,                       // disallow unnecessary parentheses (off by default)
    'no-extra-semi': 2,                         // disallow unnecessary semicolons
    'no-func-assign': 2,                        // disallow overwriting functions written as function declarations
    'no-inner-declarations': [2, 'functions'],  // disallow function or variable declarations in nested blocks
    'no-invalid-regexp': 2,                     // disallow invalid regular expression strings in the RegExp constructor
    'no-irregular-whitespace': 2,               // disallow irregular whitespace outside of strings and comments
    'no-negated-in-lhs': 2,                     // disallow negation of the left operand of an in expression
    'no-obj-calls': 2,                          // disallow the use of object properties of the global object (Math and JSON) as functions
    'no-regex-spaces': 2,                       // disallow multiple spaces in a regular expression literal
    'no-sparse-arrays': 2,                      // disallow sparse arrays
    'no-unreachable': 2,                        // disallow unreachable statements after a return, throw, continue, or break statement
    'use-isnan': 2,                             // disallow comparisons with the value NaN
    'valid-jsdoc': 0,                           // Ensure JSDoc comments are valid (off by default)
    'valid-typeof': 2,                          // Ensure that the results of typeof are compared against a valid string
    'no-unexpected-multiline': 2,               // Avoid code that looks like two expressions but is actually one (off by default)

    // Best Practices
    'accessor-pairs': 0,        // enforces getter/setter pairs in objects (off by default)
    'block-scoped-var': 2,      // treat var statements as if they were block scoped (off by default)
    'complexity': 0,            // specify the maximum cyclomatic complexity allowed in a program (off by default)
    'consistent-return': 0,     // require return statements to either always or never specify values
    'curly': [2, 'multi-line'], // Single-line no curlys; multiline requires curly
    'default-case': 2,          // require default case in switch statements (off by default)
    'dot-notation': 0,          // encourages use of dot notation whenever possible
    'dot-location': [2, 'property'], // enforces consistent newlines before or after dots (off by default)
    'eqeqeq': [2, 'allow-null'], // require the use of === and !==
    'guard-for-in': 2,          // make sure for-in loops have an if statement (off by default)
    'no-alert': 2,              // disallow the use of alert, confirm, and prompt
    'no-caller': 2,             // disallow use of arguments.caller or arguments.callee
    'no-case-declarations': 2,  // disallow lexical declarations in case clauses
    'no-div-regex': 0,          // disallow division operators explicitly at beginning of regular expression (off by default)
    'no-else-return': 2,        // disallow else after a return in an if (off by default)
    'no-empty-function': 0,     // disallow use of empty functions
    'no-empty-pattern': 0,      // disallow use of empty destructuring patterns
    'no-eq-null': 0,            // disallow comparisons to null without a type-checking operator (off by default)
    'no-eval': 2,               // disallow use of eval()
    'no-extend-native': 0,      // disallow adding to native types
    'no-extra-bind': 2,         // disallow unnecessary function binding
    'no-extra-label': 0,        // disallow unnecessary labels
    'no-fallthrough': 2,        // disallow fallthrough of case statements
    'no-floating-decimal': 2,   // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    'no-implicit-coercion': 2,  // disallow the type conversions with shorter notations
    'no-implicit-globals': 0,   // disallow var and named functions in global scope
    'no-implied-eval': 2,       // disallow use of eval()-like methods
    'no-invalid-this': 0,       // disallow this keywords outside of classes or class-like objects
    'no-iterator': 2,           // disallow usage of __iterator__ property
    'no-labels': 0,             // disallow use of labeled statements
    'no-lone-blocks': 2,        // disallow unnecessary nested blocks
    'no-loop-func': 2,          // disallow creation of functions within loops
    'no-magic-numbers': [2, { ignore: [-1, 0, 1, 2] }], // disallow the use of magic numbers
    'no-multi-spaces': 2,       // disallow use of multiple spaces
    'no-multi-str': 2,          // disallow use of multiline strings
    'no-native-reassign': 2,    // disallow reassignments of native objects
    'no-new-func': 0,           // disallow use of new operator for Function object
    'no-new-wrappers': 2,       // disallows creating new instances of String, Number, and Boolean
    'no-new': 0,                // disallow use of new operator when not part of the assignment or comparison
    'no-octal-escape': 2,       // disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
    'no-octal': 0,              // disallow use of octal literals
    'no-param-reassign': 0,     // disallow reassignment of function parameters (off by default)
    'no-process-env': 1,        // disallow use of process.env (off by default)
    'no-proto': 2,              // disallow usage of __proto__ property
    'no-redeclare': 2,          // disallow declaring the same variable more then once
    'no-return-assign': 2,      // disallow use of assignment in return statement
    'no-script-url': 2,         // disallow use of javascript: urls
    'no-self-assign': 0,        // disallow assignments where both sides are exactly the same
    'no-self-compare': 2,       // disallow comparisons where both sides are exactly the same (off by default)
    'no-sequences': 0,          // disallow use of comma operator
    'no-throw-literal': 2,      // restrict what can be thrown as an exception (off by default)
    'no-unmodified-loop-condition': 0, // disallow unmodified conditions of loops
    'no-unused-expressions': 2, // disallow usage of expressions in statement position
    'no-unused-labels': 0,      // disallow unused labels
    'no-useless-call': 1,       // disallow unnecessary .call() and .apply()
    'no-useless-concat': 2,     // disallow unnecessary concatenation of literals or template literals
    'no-useless-escape': 0,     // disallow unnecessary usage of escape character
    'no-void': 0,               // disallow use of void operator (off by default)
    'no-warning-comments': 0,   // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
    'no-with': 0,               // disallow use of the with statement
    'radix': 2,                 // require use of the second argument for parseInt() (off by default)
    'vars-on-top': 2,           // requires to declare all vars on top of their containing scope (off by default)
    'wrap-iife': [2, 'any'],    // require immediate function invocation to be wrapped in parentheses (off by default)
    'yoda': 0,                  // require or disallow Yoda conditions

    // Strict Mode
    'strict': 0,          // controls location of Use Strict Directives

    // Variables
    'init-declarations': 0,           // enforce or disallow variable initializations at definition
    'no-catch-shadow': 0,             // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    'no-delete-var': 2,               // disallow deletion of variables
    'no-label-var': 2,                // disallow labels that share a name with a variable
    'no-restricted-globals': 0,       // Disallow specific global variables
    'no-shadow': [2, { 'builtinGlobals': true, 'allow': ['err', 'error'] }], // disallow declaration of variables already declared in the outer scope
    'no-shadow-restricted-names': 0,  // disallow shadowing of names such as arguments
    'no-undef': 2,                    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef-init': 2,               // disallow use of undefined when initializing variables
    'no-undefined': 2,                // disallow use of undefined variable (off by default)
    'no-unused-vars': [2, { 'vars': 'all', 'args': 'none' }], // disallow declaration of variables that are not used in the code
    'no-use-before-define': 2,        // disallow use of variables before they are defined

    // Node.js
    'callback-return': 2,       // enforce return after a callback
    'global-require': 2,        // enforce require() on top-level module scope
    'handle-callback-err': 2,   // enforces error handling in callbacks (off by default) (on by default in the node environment)
    'no-mixed-requires': 2,     // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    'no-new-require': 2,        // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    'no-path-concat': 2,        // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    'no-process-exit': 2,       // disallow process.exit() (on by default in the node environment)
    'no-restricted-imports': 0, // restrict usage of specified node imports
    'no-restricted-modules': 0, // restrict usage of specified node modules (off by default)
    'no-sync': 1,               // disallow use of synchronous methods (off by default)

    // Stylistic Issues
    'array-bracket-spacing': [2, 'never'], // enforce spacing inside array brackets (off by default)
    'array-callback-return': 0,       // Enforces return statements in callbacks of array's methods
    'block-spacing': [2, 'always'],   // disallow or enforce spaces inside of single line blocks (fixable)
    'brace-style': 2,                 // enforce one true brace style (off by default)
    'camelcase': 0,                   // require camel case names
    'comma-spacing': 0,               // enforce spacing before and after comma
    'comma-style': 0,                 // enforce one true comma style (off by default)
    'computed-property-spacing': 0,   // require or disallow padding inside computed properties (off by default)
    'consistent-this': 0,             // enforces consistent naming when capturing the current execution context (off by default)
    'eol-last': 0,                    // enforce newline at the end of file, with no multiple empty lines
    'func-names': 0,                  // require function expressions to have a name (off by default)
    'func-style': 0,                  // enforces use of function declarations or expressions (off by default)
    'id-blacklist': 0,                // blacklist certain identifiers to prevent them being used
    'id-length': [2, { 'exceptions': 'abijxyz'.split('') }], // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-match': 0,                    // require identifiers to match the provided regular expression
    'indent': [2, 2, { 'SwitchCase': 1 }], // this option sets a specific tab width for your code (off by default)
    'jsx-quotes': [0, 'prefer-double'], // specify whether double or single quotes should be used in JSX attributes
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }], // enforces spacing between keys and values in object literal properties
    'keyword-spacing': 2,             // enforce spacing before and after keywords
    'lines-around-comment': 0,        // enforces empty lines around comments (off by default)
    'linebreak-style': 0,             // disallow mixed 'LF' and 'CRLF' as linebreaks (off by default)
    'max-nested-callbacks': 0,        // specify the maximum depth callbacks can be nested (off by default)
    'max-statements-per-line': 0,     // specify the maximum number of statements allowed per line
    'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }], // require a capital letter for constructors
    'new-parens': 0,                  // disallow the omission of parentheses when invoking a constructor with no arguments
    'newline-after-var': 0,           // allow/disallow an empty newline after var statement (off by default)
    'newline-before-return': 0,       // Require newline before return statement
    'newline-per-chained-call': 0,    // enforce newline after each call when chaining the calls
    'no-array-constructor': 0,        // disallow use of the Array constructor
    'no-continue': 0,                 // disallow use of the continue statement (off by default)
    'no-inline-comments': 0,          // disallow comments inline after code (off by default)
    'no-lonely-if': 2,                // disallow if as the only statement in an else block (off by default)
    'no-mixed-spaces-and-tabs': 2,    // disallow mixed spaces and tabs for indentation
    'no-multiple-empty-lines': [2, { max: 1 }], // disallow multiple empty lines (off by default)
    'no-negated-condition': 2,        // disallow negated conditions
    'no-nested-ternary': 2,           // disallow nested ternary expressions (off by default)
    'no-new-object': 0,               // disallow use of the Object constructor
    'no-restricted-syntax': 0,        // disallow use of certain syntax in code
    'no-spaced-func': 2,              // disallow space between function identifier and application
    'no-ternary': 0,                  // disallow the use of ternary operators (off by default)
    'no-trailing-spaces': 2,          // disallow trailing whitespace at the end of lines
    'no-underscore-dangle': 2,        // disallow dangling underscores in identifiers
    'no-unneeded-ternary': 2,         // disallow the use of ternary operators when a simpler alternative exists
    'no-whitespace-before-property': 0, // disallow whitespace before properties
    'object-curly-spacing': [2, 'always'], // require or disallow padding inside curly braces (fixable)
    'one-var': 0,                     // allow just one var statement per function (off by default)
    'one-var-declaration-per-line': 0, // require or disallow an newline around variable declarations
    'operator-assignment': 0,         // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    'operator-linebreak': 0,          // enforce operators to be placed before or after line breaks (off by default)
    'padded-blocks': [2, 'never'],    // enforce padding within blocks (off by default)
    'quote-props': 0,                 // require quotes around object literal property names (off by default)
    'quotes': [2, 'single', 'avoid-escape'], // specify whether double or single quotes should be used
    'require-jsdoc': 0,               // Require JSDoc comment
    'semi-spacing': 0,                // enforce spacing before and after semicolons
    'semi': 2,                        // require or disallow use of semicolons instead of ASI
    'sort-imports': 0,                // sort import declarations within module
    'sort-vars': 0,                   // sort variables within the same declaration block (off by default)
    'space-before-blocks': [2, 'always'], // require or disallow space before blocks (off by default)
    'space-before-function-paren': [2, { 'anonymous': 'always', 'named': 'never' }], // require or disallow space before function opening parenthesis (off by default)
    'space-in-parens': [2, 'never'],  // require or disallow spaces inside parentheses (off by default)
    'space-infix-ops': 2,             // require spaces around operators
    'space-unary-ops': 2,             // require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    'spaced-comment': [2, 'always'],  // require or disallow a space immediately following the // or /* in a comment (off by default)
    'wrap-regex': 0,                  // require regex literals to be wrapped in parentheses (off by default)

    // ECMAScript 6
    'arrow-body-style': 0,       // require braces in arrow function body
    'arrow-parens': 0,           // require parens in arrow function arguments
    'arrow-spacing': 0,          // require space before/after arrow function's arrow (fixable)
    'constructor-super': 0,      // verify super() callings in constructors (off by default)
    'generator-star-spacing': 0, // enforce the spacing around the * in generator functions (off by default)
    'no-class-assign': 0,        // disallow modifying variables of class declarations
    'no-confusing-arrow': 0,     // disallow arrow functions where they could be confused with comparisons
    'no-const-assign': 0,        // disallow modifying variables that are declared using const
    'no-dupe-class-members': 0,  // disallow duplicate name in class members
    'no-duplicate-imports': 0,   // disallow duplicate module imports
    'no-new-symbol': 0,          // disallow use of the new operator with the Symbol object
    'no-this-before-super': 0,   // disallow to use this/super before super() calling in constructors (off by default)
    'no-useless-constructor': 0, // disallow unnecessary constructor
    'no-var': 0,                 // require let or const instead of var (off by default)
    'object-shorthand': 0,       // require method and property shorthand syntax for object literals (off by default)
    'prefer-arrow-callback': 0,  // suggest using arrow functions as callbacks
    'prefer-const': 1,           // suggest using of const declaration for variables that are never modified after declared (off by default)
    'prefer-reflect': 0,         // suggest using Reflect methods where applicable
    'prefer-rest-params': 0,     // suggest using the rest parameters instead of arguments
    'prefer-spread': 0,          // suggest using the spread operator instead of .apply()
    'prefer-template': 0,        // suggest using template literals instead of strings concatenation
    'require-yield': 0,          // disallow generator functions that do not have yield
    'template-curly-spacing': 0, // enforce spacing around embedded expressions of template strings
    'yield-star-spacing': 0,     // enforce spacing around the * in yield* expressions

    // Legacy
    'max-depth': 0,       // specify the maximum depth that blocks can be nested (off by default)
    // eslint-disable-next-line no-magic-numbers
    'max-len': [1, 80, 2], // specify the maximum length of a line in your program (off by default)
    'max-params': 0,      // limits the number of parameters that can be used in the function declaration. (off by default)
    'max-statements': 0,  // specify the maximum number of statement allowed in a function (off by default)
    'no-bitwise': 0,      // disallow use of bitwise operators (off by default)
    'no-plusplus': 0      // disallow use of unary operators, ++ and -- (off by default)
  }
};
/* eslint-enable max-len */
