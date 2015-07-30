
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# Disallow Variables Deletion (no-delete-var)

This rule prevents the use of \`delete\` operator on variables:

\`\`\`javascript
var x;
delete x;
\`\`\`

The delete operator will only delete the properties of objects. It cannot "delete" variables or anything else. Using them on variables might lead to unexpected behavior.

## Further Reading

* [Only properties should be deleted](http://jslinterrors.com/only-properties-should-be-deleted/)
`);
  }
});