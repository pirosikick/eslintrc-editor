
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# No empty labels (no-empty-label)

Labeled statements are only used in conjunction with labeled break and continue statements. ECMAScript has no goto statement.


## Rule Details

This error occurs when a label is used to mark a statement that is not an iteration or switch

The following patterns are considered warnings:

\`\`\`js
labeled: //Label for the following var statement
    var x = 10;
};
\`\`\`

The following patterns are not considered warnings:

\`\`\`js
labeled:
    for (var i=10; i; i--) {
        ...
    }
};
\`\`\`
`);
  }
});