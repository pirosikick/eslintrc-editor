
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# Disallow Ternary Operators (no-ternary)

The ternary operator is used to conditionally assign a value to a variable. Some believe that the use of ternary operators leads to unclear code.

\`\`\`js
var foo = isBar ? baz : qux;
\`\`\`

## Rule Details

The \`no-ternary\` rule aims to disallow the use of ternary operators.

The following patterns are considered warnings:

\`\`\`js
var foo = isBar ? baz : qux;

foo ? bar() : baz();

function quux() {
  return foo ? bar : baz;
}
\`\`\`

The following patterns are considered okay and could be used alternatively:

\`\`\`js
var foo;

if (isBar) {
    foo = baz;
} else {
    foo = qux;
}

if (foo) {
    bar();
} else {
    baz();
}

function quux() {
    if (foo) {
        return bar;
    } else {
        return baz;
    }
}
\`\`\`

## Related Rules

* [no-nested-ternary](no-nested-ternary.md)
`);
  }
});