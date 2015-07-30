
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# Limit Maximum Number of Statements (max-statements)

The \`max-statements\` rule allows you to specify the maximum number statements allow in a function.

\`\`\`js
// max-statements: [1, 2]  // Maximum of 2 statements.
function foo() {
  var bar = 1;
  var baz = 2;

  var qux = 3; // Too many.
}
\`\`\`

## Rule Details

This rule allows you to configure the maximum number of statements allowed in a function.

The following patterns are considered warnings:

\`\`\`js
// max-statements: [1, 2]  // Maximum of 2 statements.
function foo() {
  var bar = 1;
  var baz = 2;

  var qux = 3; // Too many.
}
\`\`\`

The following patterns are not warnings:

\`\`\`js
// max-statements: [1, 2]  // Maximum of 2 statements.
function foo() {
  var bar = 1;
  return function () {

    // The number of statements in the inner function does not count toward the
    // statement maximum.

    return 42;
  };
}
\`\`\`

## Related Rules

* [complexity](complexity.md)
* [max-depth](max-depth.md)
* [max-len](max-len.md)
* [max-nested-callbacks](max-nested-callbacks.md)
* [max-params](max-params.md)
`);
  }
});