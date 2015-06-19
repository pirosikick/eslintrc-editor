
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# Disallow Global Object Function Calls (no-obj-calls)

ECMAScript provides several global objects that are intended to be used as-is. Some of these objects look as if they could be constructors due their capitalization (such as \`Math\` and \`JSON\`) but will throw an error if you try to execute them as functions.

The [ECMAScript 5 specification](http://es5.github.io/#x15.8) makes it clear that both \`Math\` and \`JSON\` cannot be invoked:

> The Math object does not have a \`[[Call]]\` internal property; it is not possible to invoke the Math object as a function.

## Rule Details

This rule is aimed at preventing the accidental calling of global objects as functions.

The following patterns are considered warnings:

\`\`\`js
var x = Math();
var y = JSON();
\`\`\`

The following patterns are not considered warnings:

\`\`\`js
var x = math();
var y = json();
\`\`\`

## Further Reading

* [The Math Object](http://es5.github.io/#x15.8)
* ['{a}' is not a function](http://jslinterrors.com/a-is-not-a-function/)
`);
  }
});