
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# Require spaces following \`return\`, \`throw\`, and \`case\` (space-return-throw-case)

Require spaces following \`return\`, \`throw\`, and \`case\`.

## Rule Details

The following patterns are considered warnings:

\`\`\`js
throw{a:0}
\`\`\`

\`\`\`js
function f(){ return-a; }
\`\`\`

\`\`\`js
switch(a){ case'a': break; }
\`\`\`

The following patterns are not considered warnings:

\`\`\`js
throw {a: 0};
\`\`\`

\`\`\`js
function f(){ return -a; }
\`\`\`

\`\`\`js
switch(a){ case 'a': break; }
\`\`\`
`);
  }
});