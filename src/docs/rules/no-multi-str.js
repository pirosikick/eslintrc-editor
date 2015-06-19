
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# Disallow Multiline Strings (no-multi-str)

It's possible to create multiline strings in JavaScript by using a slash before a newline, such as:

\`\`\`js
var x = "Line 1 \
         Line 2";
\`\`\`

Some consider this to be a bad practice as it was an undocumented feature of JavaScript that was only formalized later.

## Rule Details

This rule is aimed at preventing the use of multiline strings.

The following generates a warning:

\`\`\`js
var x = "Line 1 \
         Line 2";
\`\`\`

The following does not generate a warning:

\`\`\`javascript
var x = "Line 1\n" +
        "Line 2";
\`\`\`



## Further Reading

* [Bad escapement of EOL](http://jslinterrors.com/bad-escapement-of-eol-use-option-multistr-if-needed/)
`);
  }
});