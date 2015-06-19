
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# Disallow continue (no-continue)

The \`continue\` statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration. When used incorrectly it makes code less testable, less readable and less maintainable. Structured control flow statements such as \`if\` should be used instead.

\`\`\`js
var sum = 0,
    i;

for(i = 0; i < 10; i++) {
    if(i >= 5) {
        continue;
    }

    a += i;
}
\`\`\`

## Rule Details

This rule is aimed at preventing the use of \`continue\` statement.
As such it warns whenever it sees \`continue\` statement.

The following patterns are considered warnings:

\`\`\`js
var sum = 0,
    i;

for(i = 0; i < 10; i++) {
    if(i >= 5) {
        continue;
    }

    a += i;
}
\`\`\`

\`\`\`js
var sum = 0,
    i;

labeledLoop: for(i = 0; i < 10; i++) {
    if(i >= 5) {
        continue labeledLoop;
    }

    a += i;
}
\`\`\`

The following patterns are not considered warnings:

\`\`\`js
var sum = 0,
    i;

for(i = 0; i < 10; i++) {
    if(i < 5) {
       a += i;
    }
}
\`\`\`

## Compatibility

* **JSLint**: \`continue\`
`);
  }
});