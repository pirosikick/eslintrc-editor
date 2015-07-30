
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# Disallow Use of Reserved Words as Keys (no-reserved-keys)

ECMAScript 3 described as series of keywords and reserved words, such as \`if\` and \`public\`, that are used or intended to be used for a core language feature. The specification also indicated that these keywords and reserved words could not be used as object property names without being enclosed in strings. An error occurs in an ECMAScript 3 environment when you use a keyword or reserved word in an object literal. For example:

\`\`\`js
var values = {
    enum: ["red", "blue", "green"]  // throws an error in ECMAScript 3
}
\`\`\`

In this code, \`enum\` is used as an object key and will throw an error in an ECMAScript 3 environment (such as Internet Explorer 8).

ECMAScript 5 loosened the restriction such that keywords and reserved words can be used as object keys without causing an error. However, any code that needs to run in ECMAScript 3 still needs to avoid using keywords and reserved words as keys.

## Rule Details

This rule is aimed at eliminating the use of ECMAScript 3 keywords and reserved words as object literal keys. As such, it warns whenever an object key would throw an error in an ECMAScript 3 environment.

The following patterns are considered warnings:

\`\`\`js
var superman = {
    class: "Superhero",
    private: "Clark Kent"
};

var values = {
    enum: ["red", "blue", "green"]
};
\`\`\`

The following patterns are not considered warnings:

\`\`\`js
var superman = {
    "class": "Superhero",
    "private": "Clark Kent"
};

var values = {
    "enum": ["red", "blue", "green"]
};
\`\`\`

## When Not to Use It

If your code is only going to be executed in an ECMAScript 5 or higher environment, then you can safely leave this rule off.

## Further Reading

* [Reserved words as property names](http://kangax.github.io/compat-table/es5/#Reserved_words_as_property_names)
`);
  }
});