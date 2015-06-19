
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# Disallow Parens Around Functions (no-wrap-func)

**Deprecation notice**: This rule is deprecated and has been superseded by the [no-extra-parens](no-extra-parens.md) rule, when configured in the \`"functions"\` mode. It will be removed in ESLint v1.0.


Although it's possible to wrap functions in parentheses, this can be confusing when the code also contains immediately-invoked function expressions (IIFEs) since parentheses are often used to make this distinction. For example:

\`\`\`js
var foo = (function() {
    // IIFE
}());

var bar = (function() {
    // not an IIFE
});
\`\`\`

## Rule Details

This rule will raise a warning when it encounters a function expression wrapped in parentheses with no following invoking parentheses.

The following patterns are considered warnings:

\`\`\`js
var a = (function() {...});
\`\`\`

The following patterns are considered okay and do not cause warnings:

\`\`\`js
var a = function() {...};

(function() {...})();
\`\`\`

## Further Reading

* [Do not wrap function literals in parens unless they are to be immediately invoked](http://jslinterrors.com/do-not-wrap-function-literals-in-parens)
`);
  }
});