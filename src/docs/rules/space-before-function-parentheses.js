
var React = require('react');
var md2react = require('md2react');
module.exports = React.createClass({
  render: function () {
    return md2react(`# Require or disallow spaces before function parentheses (space-before-function-parentheses)

**Deprecation notice**: This rule is deprecated, as it has been renamed to [space-before-function-paren](space-before-function-paren.md) for consistency with other rules' names, which used "parens" instead of "parentheses". This rule, by the old name, will be removed in ESLint v1.0. The new rule is identical in everything except name.

When formatting a function, whitespace is allowed between the function name or \`function\` keyword and the opening paren. Named functions also require a space between the \`function\` keyword and the function name, but anonymous functions require no whitespace. For example:

\`\`\`js
function withoutSpace(x) {
    // ...
}

function withSpace (x) {
    // ...
}

var anonymousWithoutSpace = function() {};

var anonymousWithSpace = function () {};
\`\`\`

Style guides may require a space after the \`function\` keyword for anonymous functions, while others specify no whitespace. Similarly, the space after a function name may or may not be required.

## Rule Details

This rule aims to enforce consistent spacing before function parentheses and as such, will warn whenever whitespace doesn't match the preferences specified.

This rule takes one argument. If it is \`"always"\` then all named functions and anonymous functions must have space before function parentheses. If \`"never"\` then all named functions and anonymous functions must not have space before function parentheses. If you want different spacing for named and anonymous functions you can pass an configuration object as the rule argument to configure those separately (e. g. \`{"anonymous": "always", "named": "never"}\`).

The default configuration is \`"always"\`.

The following patterns are considered warnings when configured \`"always"\`:

\`\`\`js
function foo() {
    // ...
}

var bar function() {
    // ...
};

var bar = function foo() {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};
\`\`\`

The following patterns are not considered warnings when configured \`"always"\`:

\`\`\`js
function foo () {
    // ...
}

var bar function () {
    // ...
};

var bar = function foo () {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};
\`\`\`

The following patterns are considered warnings when configured \`"never"\`:

\`\`\`js
function foo () {
    // ...
}

var bar function () {
    // ...
};

var bar = function foo () {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};
\`\`\`

The following patterns are not considered warnings when configured \`"never"\`:

\`\`\`js
function foo() {
    // ...
}

var bar function() {
    // ...
};

var bar = function foo() {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};
\`\`\`

The following patterns are considered warnings when configured \`{"anonymous": "always", "named": "never"}\`:

\`\`\`js
function foo () {
    // ...
}

var bar = function() {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};
\`\`\`

The following patterns are not considered warnings when configured \`{"anonymous": "always", "named": "never"}\`:

\`\`\`js
function foo() {
    // ...
}

var bar = function () {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};
\`\`\`

The following patterns are considered warnings when configured \`{"anonymous": "never", "named": "always"}\`:

\`\`\`js
function foo() {
    // ...
}

var bar = function () {
    // ...
};

class Foo {
    constructor() {
        // ...
    }
}

var foo = {
    bar() {
        // ...
    }
};
\`\`\`

The following patterns are not considered warnings when configured \`{"anonymous": "never", "named": "always"}\`:

\`\`\`js
function foo () {
    // ...
}

var bar = function() {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};
\`\`\`

## When Not To Use It

You can turn this rule off if you are not concerned with the consistency of spacing before function parenthesis.

## Related Rules

* [space-after-keywords](space-after-keywords.md)
* [space-return-throw-case](space-return-throw-case.md)
`);
  }
});