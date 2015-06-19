
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# Disallow mixing CRLF and LF linebreaks (linebreak-style)

When developing with a lot of people all having different editors, VCS applications and operating systems it may occur that
different line endings are written by either of the mentioned (might especially happen when using the windows and mac versions of SourceTree together).

The linebreaks (new lines) used in windows operating system are usually _carriage returns_ (CR) followed by a _line feed_ (LF) making it a _carriage return line feed_ (CRLF)
whereas Linux and Unix use a simple _line feed_ (LF). The corresponding _control sequences_ are \`"\n"\` (for LF) and \`"\r\n"\` for (CRLF).

Many versioning systems (like git and subversion) can automatically ensure the correct ending. However to cover all contingencies you can activate this rule.

## Rule Details

This rule aims to ensure having consistent line endings independent of operating system, VCS or editor used.

The following patterns are considered warnings:

\`\`\`js
    var a = 'a',\r\n
        b = 'b';\n

    // option 'unix'
    var a = 'a';\r\n

    // option 'windows'
    var a = 'a';\n
\`\`\`

The following patterns are not warnings:

\`\`\`js
    // option 'unix'
    var a = 'a',\n
        b = 'b';\n
    \n
    function foo(params) {\n
        // do stuff \n
    }\n

    // option 'windows'
    var a = 'a',\r\n
        b = 'b';\r\n
    \r\n
    function foo(params) {\r\n
        // do stuff \r\n
    }\r\n
\`\`\`

### Options

This rule may take one option which is either \`unix\` (LF) or \`windows\` (CRLF). When omitted \`unix\` is assumed.

## When Not To Use It

If you aren't concerned about having different line endings within you code, then you can safely turn this rule off.
`);
  }
});