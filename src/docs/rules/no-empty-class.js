
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# Disallow Empty Character Classes (no-empty-class)

**Deprecation notice**: This rule is deprecated and has been superseded by the [no-empty-character-class](no-empty-character-class.md) rule. It will be removed in ESLint v1.0.

Empty character classes in regular expressions do not match anything and can result in code that may not work as intended.

\`\`\`js
var foo = /^abc[]/;
\`\`\`

## Rule Details

This rule is aimed at highlighting possible typos and unexpected behavior in regular expressions which may arise from the use of empty character classes.

The following patterns are considered warnings:

\`\`\`js
var foo = /^abc[]/;

/^abc[]/.test(foo);

bar.match(/^abc[]/);
\`\`\`

The following patterns are not considered warnings:

\`\`\`js
var foo = /^abc/;

var foo = /^abc[a-z]/;

var bar = new RegExp("^abc[]");
\`\`\`
`);
  }
});