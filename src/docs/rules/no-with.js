
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# No with Statements (no-with)

The \`with\` statement is potentially problematic because it adds members of an object to the current scope, making it impossible to tell what a variable inside the block actually refers to. Additionally, the \`with\` statement cannot be used in strict mode.

## Rule Details

This rule is aimed at eliminating \`with\` statements.

The following patterns are considered warnings:

\`\`\`js
with (foo) {
    // ...
}
\`\`\`

## When Not To Use It

If you intentionally use \`with\` statements then you can disable this rule.

## Further Reading

* [with Statement Considered Harmful](http://www.yuiblog.com/blog/2006/04/11/with-statement-considered-harmful/)
`);
  }
});