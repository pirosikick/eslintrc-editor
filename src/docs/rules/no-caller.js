
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# Disallow Use of caller/callee (no-caller)

The use of \`arguments.caller\` and \`arguments.callee\` make several code optimizations impossible. They have been deprecated in future versions of JavaScript and their use is forbidden in ECMAScript 5 while in strict mode.

\`\`\`js
function foo() {
    var callee = arguments.callee;
}
\`\`\`

## Rule Details

This rule is aimed at discouraging the use of deprecated and sub-optimal code, but disallowing the use of \`arguments.caller\` and \`arguments.callee\`. As such, it will warn when \`arguments.caller\` and \`arguments.callee\` are used.

The following patterns are considered warnings:

\`\`\`js
function foo(n) {
    if (n <= 0) {
        return;
    }

    arguments.callee(n - 1);
}

[1,2,3,4,5].map(function(n) {
    return !(n > 1) ? 1 : arguments.callee(n - 1) * n;
});
\`\`\`

The following patterns are not considered warnings:

\`\`\`js
function foo(n) {
    if (n <= 0) {
        return;
    }

    foo(n - 1);
}

[1,2,3,4,5].map(function factorial(n) {
    return !(n > 1) ? 1 : factorial(n - 1) * n;
});
\`\`\`
`);
  }
});