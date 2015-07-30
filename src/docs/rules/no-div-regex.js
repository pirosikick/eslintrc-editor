
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# Disallow Regexs That Look Like Division (no-div-regex)

Require regex literals to escape division operators.

\`\`\`js
function() { return /=foo/; }
\`\`\`

## Rule Details

This is used to disambiguate the division operator to not confuse users.

The following patterns are considered warnings:

\`\`\`js
function() { return /=foo/; }
\`\`\`

The following patterns adhere to this rule:

\`\`\`js
function() { return /\=foo/; }
\`\`\`

## Related Rules

* [no-control-regex](no-control-regex.md)
* [no-regex-spaces](no-regex-spaces.md)
`);
  }
});