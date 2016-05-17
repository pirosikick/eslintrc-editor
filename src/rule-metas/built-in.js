{
  "accessor-pairs": {
    "docs": {
      "description": "Enforces getter/setter pairs in objects",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "getWithoutSet": {
            "type": "boolean"
          },
          "setWithoutGet": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "array-bracket-spacing": {
    "docs": {
      "description": "Enforce spacing inside array brackets",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "enum": [
          "always",
          "never"
        ]
      },
      {
        "type": "object",
        "properties": {
          "singleValue": {
            "type": "boolean"
          },
          "objectsInArrays": {
            "type": "boolean"
          },
          "arraysInArrays": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "array-callback-return": {
    "docs": {
      "description": "enforce `return` statements in callbacks of array methods",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "arrow-body-style": {
    "docs": {
      "description": "require braces around arrow function bodies",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "always",
          "as-needed"
        ]
      }
    ]
  },
  "arrow-parens": {
    "docs": {
      "description": "require parentheses around arrow function arguments",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "always",
          "as-needed"
        ]
      }
    ]
  },
  "arrow-spacing": {
    "docs": {
      "description": "enforce consistent spacing before and after the arrow in arrow functions",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "type": "object",
        "properties": {
          "before": {
            "type": "boolean"
          },
          "after": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "block-scoped-var": {
    "docs": {
      "description": "enforce the use of variables within the scope they are defined",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "block-spacing": {
    "docs": {
      "description": "enforce consistent spacing inside single-line blocks",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "enum": [
          "always",
          "never"
        ]
      }
    ]
  },
  "brace-style": {
    "docs": {
      "description": "enforce consistent brace style for blocks",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "1tbs",
          "stroustrup",
          "allman"
        ]
      },
      {
        "type": "object",
        "properties": {
          "allowSingleLine": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "callback-return": {
    "docs": {
      "description": "require `return` statements after callbacks",
      "category": "Node.js and CommonJS",
      "recommended": false
    },
    "schema": [
      {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    ]
  },
  "camelcase": {
    "docs": {
      "description": "enforce camelcase naming convention",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "properties": {
            "enum": [
              "always",
              "never"
            ]
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "comma-dangle": {
    "docs": {
      "description": "require or disallow trailing commas",
      "category": "Possible Errors",
      "recommended": true
    },
    "fixable": "code",
    "schema": [
      {
        "enum": [
          "always",
          "always-multiline",
          "only-multiline",
          "never"
        ]
      }
    ]
  },
  "comma-spacing": {
    "docs": {
      "description": "enforce consistent spacing before and after commas",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "type": "object",
        "properties": {
          "before": {
            "type": "boolean"
          },
          "after": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "comma-style": {
    "docs": {
      "description": "enforce consistent comma style",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "first",
          "last"
        ]
      },
      {
        "type": "object",
        "properties": {
          "exceptions": {
            "type": "object",
            "additionalProperties": {
              "type": "boolean"
            }
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "complexity": {
    "docs": {
      "description": "enforce a maximum cyclomatic complexity allowed in a program",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "oneOf": [
          {
            "type": "integer",
            "minimum": 0
          },
          {
            "type": "object",
            "properties": {
              "maximum": {
                "type": "integer",
                "minimum": 0
              },
              "max": {
                "type": "integer",
                "minimum": 0
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "computed-property-spacing": {
    "docs": {
      "description": "enforce consistent spacing inside computed property brackets",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "enum": [
          "always",
          "never"
        ]
      }
    ]
  },
  "consistent-return": {
    "docs": {
      "description": "require `return` statements to either always or never specify values",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "consistent-this": {
    "docs": {
      "description": "enforce consistent naming when capturing the current execution context",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1
      },
      "uniqueItems": true
    }
  },
  "constructor-super": {
    "docs": {
      "description": "require `super()` calls in constructors",
      "category": "ECMAScript 6",
      "recommended": true
    },
    "schema": []
  },
  "curly": {
    "docs": {
      "description": "enforce consistent brace style for all control statements",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": {
      "anyOf": [
        {
          "type": "array",
          "items": [
            {
              "enum": [
                "all"
              ]
            }
          ],
          "minItems": 0,
          "maxItems": 1
        },
        {
          "type": "array",
          "items": [
            {
              "enum": [
                "multi",
                "multi-line",
                "multi-or-nest"
              ]
            },
            {
              "enum": [
                "consistent"
              ]
            }
          ],
          "minItems": 0,
          "maxItems": 2
        }
      ]
    }
  },
  "default-case": {
    "docs": {
      "description": "require `default` cases in <code>switch</code> statements",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "commentPattern": {
            "type": "string"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "dot-location": {
    "docs": {
      "description": "enforce consistent newlines before and after dots",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "object",
          "property"
        ]
      }
    ]
  },
  "dot-notation": {
    "docs": {
      "description": "enforce dot notation whenever possible",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "allowKeywords": {
            "type": "boolean"
          },
          "allowPattern": {
            "type": "string"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "eol-last": {
    "docs": {
      "description": "enforce at least one newline at the end of files",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "enum": [
          "unix",
          "windows"
        ]
      }
    ]
  },
  "eqeqeq": {
    "docs": {
      "description": "require the use of `===` and `!==`",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "smart",
          "allow-null"
        ]
      }
    ]
  },
  "func-names": {
    "docs": {
      "description": "enforce named `function` expressions",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": []
  },
  "func-style": {
    "docs": {
      "description": "enforce the consistent use of either `function` declarations or expressions",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "declaration",
          "expression"
        ]
      },
      {
        "type": "object",
        "properties": {
          "allowArrowFunctions": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "generator-star-spacing": {
    "docs": {
      "description": "enforce consistent spacing around `*` operators in generator functions",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "oneOf": [
          {
            "enum": [
              "before",
              "after",
              "both",
              "neither"
            ]
          },
          {
            "type": "object",
            "properties": {
              "before": {
                "type": "boolean"
              },
              "after": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "global-require": {
    "docs": {
      "description": "require `require()` calls to be placed at top-level module scope",
      "category": "Node.js and CommonJS",
      "recommended": false
    },
    "schema": []
  },
  "guard-for-in": {
    "docs": {
      "description": "require `for-in` loops to include an `if` statement",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "handle-callback-err": {
    "docs": {
      "description": "require error handling in callbacks",
      "category": "Node.js and CommonJS",
      "recommended": false
    },
    "schema": [
      {
        "type": "string"
      }
    ]
  },
  "id-blacklist": {
    "docs": {
      "description": "disallow specified identifiers",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "uniqueItems": true
    }
  },
  "id-length": {
    "docs": {
      "description": "enforce minimum and maximum identifier lengths",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "min": {
            "type": "number"
          },
          "max": {
            "type": "number"
          },
          "exceptions": {
            "type": "array",
            "uniqueItems": true,
            "items": {
              "type": "string"
            }
          },
          "properties": {
            "enum": [
              "always",
              "never"
            ]
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "id-match": {
    "docs": {
      "description": "require identifiers to match a specified regular expression",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "type": "string"
      },
      {
        "type": "object",
        "properties": {
          "properties": {
            "type": "boolean"
          }
        }
      }
    ]
  },
  "indent": {
    "docs": {
      "description": "enforce consistent indentation",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "oneOf": [
          {
            "enum": [
              "tab"
            ]
          },
          {
            "type": "integer",
            "minimum": 0
          }
        ]
      },
      {
        "type": "object",
        "properties": {
          "SwitchCase": {
            "type": "integer",
            "minimum": 0
          },
          "VariableDeclarator": {
            "oneOf": [
              {
                "type": "integer",
                "minimum": 0
              },
              {
                "type": "object",
                "properties": {
                  "var": {
                    "type": "integer",
                    "minimum": 0
                  },
                  "let": {
                    "type": "integer",
                    "minimum": 0
                  },
                  "const": {
                    "type": "integer",
                    "minimum": 0
                  }
                }
              }
            ]
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "init-declarations": {
    "docs": {
      "description": "require or disallow initialization in `var` declarations",
      "category": "Variables",
      "recommended": false
    },
    "schema": {
      "anyOf": [
        {
          "type": "array",
          "items": [
            {
              "enum": [
                "always"
              ]
            }
          ],
          "minItems": 0,
          "maxItems": 1
        },
        {
          "type": "array",
          "items": [
            {
              "enum": [
                "never"
              ]
            },
            {
              "type": "object",
              "properties": {
                "ignoreForLoopInit": {
                  "type": "boolean"
                }
              },
              "additionalProperties": false
            }
          ],
          "minItems": 0,
          "maxItems": 2
        }
      ]
    }
  },
  "jsx-quotes": {
    "docs": {
      "description": "enforce the consistent use of either double or single quotes in JSX attributes",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "enum": [
          "prefer-single",
          "prefer-double"
        ]
      }
    ]
  },
  "key-spacing": {
    "docs": {
      "description": "enforce consistent spacing between keys and values in object literal properties",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "align": {
                "enum": [
                  "colon",
                  "value"
                ]
              },
              "mode": {
                "enum": [
                  "strict",
                  "minimum"
                ]
              },
              "beforeColon": {
                "type": "boolean"
              },
              "afterColon": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "singleLine": {
                "type": "object",
                "properties": {
                  "mode": {
                    "enum": [
                      "strict",
                      "minimum"
                    ]
                  },
                  "beforeColon": {
                    "type": "boolean"
                  },
                  "afterColon": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "multiLine": {
                "type": "object",
                "properties": {
                  "align": {
                    "enum": [
                      "colon",
                      "value"
                    ]
                  },
                  "mode": {
                    "enum": [
                      "strict",
                      "minimum"
                    ]
                  },
                  "beforeColon": {
                    "type": "boolean"
                  },
                  "afterColon": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "keyword-spacing": {
    "docs": {
      "description": "enforce consistent spacing before and after keywords",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "type": "object",
        "properties": {
          "before": {
            "type": "boolean"
          },
          "after": {
            "type": "boolean"
          },
          "overrides": {
            "type": "object",
            "properties": {
              "abstract": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "as": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "await": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "boolean": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "break": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "byte": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "case": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "catch": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "char": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "class": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "const": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "continue": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "debugger": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "default": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "delete": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "do": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "double": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "else": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "enum": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "export": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "extends": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "false": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "final": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "finally": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "float": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "for": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "from": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "function": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "get": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "goto": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "if": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "implements": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "import": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "in": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "instanceof": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "int": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "interface": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "let": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "long": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "native": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "new": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "null": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "of": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "package": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "private": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "protected": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "public": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "return": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "set": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "short": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "static": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "super": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "switch": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "synchronized": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "this": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "throw": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "throws": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "transient": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "true": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "try": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "typeof": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "var": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "void": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "volatile": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "while": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "with": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              },
              "yield": {
                "type": "object",
                "properties": {
                  "before": {
                    "type": "boolean"
                  },
                  "after": {
                    "type": "boolean"
                  }
                },
                "additionalProperties": false
              }
            },
            "additionalProperties": false
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "linebreak-style": {
    "docs": {
      "description": "enforce consistent linebreak style",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "enum": [
          "unix",
          "windows"
        ]
      }
    ]
  },
  "lines-around-comment": {
    "docs": {
      "description": "require empty lines around comments",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "type": "object",
        "properties": {
          "beforeBlockComment": {
            "type": "boolean"
          },
          "afterBlockComment": {
            "type": "boolean"
          },
          "beforeLineComment": {
            "type": "boolean"
          },
          "afterLineComment": {
            "type": "boolean"
          },
          "allowBlockStart": {
            "type": "boolean"
          },
          "allowBlockEnd": {
            "type": "boolean"
          },
          "allowObjectStart": {
            "type": "boolean"
          },
          "allowObjectEnd": {
            "type": "boolean"
          },
          "allowArrayStart": {
            "type": "boolean"
          },
          "allowArrayEnd": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "max-depth": {
    "docs": {
      "description": "enforce a maximum depth that blocks can be nested",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "oneOf": [
          {
            "type": "integer",
            "minimum": 0
          },
          {
            "type": "object",
            "properties": {
              "maximum": {
                "type": "integer",
                "minimum": 0
              },
              "max": {
                "type": "integer",
                "minimum": 0
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "max-len": {
    "docs": {
      "description": "enforce a maximum line length",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "code": {
                "type": "integer",
                "minimum": 0
              },
              "comments": {
                "type": "integer",
                "minimum": 0
              },
              "tabWidth": {
                "type": "integer",
                "minimum": 0
              },
              "ignorePattern": {
                "type": "string"
              },
              "ignoreComments": {
                "type": "boolean"
              },
              "ignoreUrls": {
                "type": "boolean"
              },
              "ignoreTrailingComments": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          },
          {
            "type": "integer",
            "minimum": 0
          }
        ]
      },
      {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "code": {
                "type": "integer",
                "minimum": 0
              },
              "comments": {
                "type": "integer",
                "minimum": 0
              },
              "tabWidth": {
                "type": "integer",
                "minimum": 0
              },
              "ignorePattern": {
                "type": "string"
              },
              "ignoreComments": {
                "type": "boolean"
              },
              "ignoreUrls": {
                "type": "boolean"
              },
              "ignoreTrailingComments": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          },
          {
            "type": "integer",
            "minimum": 0
          }
        ]
      },
      {
        "type": "object",
        "properties": {
          "code": {
            "type": "integer",
            "minimum": 0
          },
          "comments": {
            "type": "integer",
            "minimum": 0
          },
          "tabWidth": {
            "type": "integer",
            "minimum": 0
          },
          "ignorePattern": {
            "type": "string"
          },
          "ignoreComments": {
            "type": "boolean"
          },
          "ignoreUrls": {
            "type": "boolean"
          },
          "ignoreTrailingComments": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "max-nested-callbacks": {
    "docs": {
      "description": "enforce a maximum depth that callbacks can be nested",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "oneOf": [
          {
            "type": "integer",
            "minimum": 0
          },
          {
            "type": "object",
            "properties": {
              "maximum": {
                "type": "integer",
                "minimum": 0
              },
              "max": {
                "type": "integer",
                "minimum": 0
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "max-params": {
    "docs": {
      "description": "enforce a maximum number of parameters in `function` definitions",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "oneOf": [
          {
            "type": "integer",
            "minimum": 0
          },
          {
            "type": "object",
            "properties": {
              "maximum": {
                "type": "integer",
                "minimum": 0
              },
              "max": {
                "type": "integer",
                "minimum": 0
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "max-statements-per-line": {
    "docs": {
      "description": "enforce a maximum number of statements allowed per line",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "max": {
            "type": "integer"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "max-statements": {
    "docs": {
      "description": "enforce a maximum number of statements allowed in `function` blocks",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "oneOf": [
          {
            "type": "integer",
            "minimum": 0
          },
          {
            "type": "object",
            "properties": {
              "maximum": {
                "type": "integer",
                "minimum": 0
              },
              "max": {
                "type": "integer",
                "minimum": 0
              }
            },
            "additionalProperties": false
          }
        ]
      },
      {
        "type": "object",
        "properties": {
          "ignoreTopLevelFunctions": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "new-cap": {
    "docs": {
      "description": "require constructor `function` names to begin with a capital letter",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "newIsCap": {
            "type": "boolean"
          },
          "capIsNew": {
            "type": "boolean"
          },
          "newIsCapExceptions": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "capIsNewExceptions": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "properties": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "new-parens": {
    "docs": {
      "description": "require parentheses when invoking a constructor with no arguments",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": []
  },
  "newline-after-var": {
    "docs": {
      "description": "require or disallow an empty line after `var` declarations",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "never",
          "always"
        ]
      }
    ]
  },
  "newline-before-return": {
    "docs": {
      "description": "require an empty line before `return` statements",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": []
  },
  "newline-per-chained-call": {
    "docs": {
      "description": "require a newline after each call in a method chain",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "ignoreChainWithDepth": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-alert": {
    "docs": {
      "description": "disallow the use of `alert`, `confirm`, and `prompt`",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-array-constructor": {
    "docs": {
      "description": "disallow `Array` constructors",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": []
  },
  "no-bitwise": {
    "docs": {
      "description": "disallow bitwise operators",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "allow": {
            "type": "array",
            "items": {
              "enum": [
                "^",
                "|",
                "&",
                "<<",
                ">>",
                ">>>",
                "^=",
                "|=",
                "&=",
                "<<=",
                ">>=",
                ">>>=",
                "~"
              ]
            },
            "uniqueItems": true
          },
          "int32Hint": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-caller": {
    "docs": {
      "description": "disallow the use of `arguments.caller` or `arguments.callee`",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-case-declarations": {
    "docs": {
      "description": "disallow lexical declarations in case clauses",
      "category": "Best Practices",
      "recommended": true
    },
    "schema": []
  },
  "no-catch-shadow": {
    "docs": {
      "description": "disallow `catch` clause parameters from shadowing variables in the outer scope",
      "category": "Variables",
      "recommended": false
    },
    "schema": []
  },
  "no-class-assign": {
    "docs": {
      "description": "disallow reassigning class members",
      "category": "ECMAScript 6",
      "recommended": true
    },
    "schema": []
  },
  "no-cond-assign": {
    "docs": {
      "description": "disallow assignment operators in conditional expressions",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": [
      {
        "enum": [
          "except-parens",
          "always"
        ]
      }
    ]
  },
  "no-confusing-arrow": {
    "docs": {
      "description": "disallow arrow functions where they could be confused with comparisons",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "allowParens": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-console": {
    "docs": {
      "description": "disallow the use of `console`",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "allow": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "minItems": 1,
            "uniqueItems": true
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-const-assign": {
    "docs": {
      "description": "disallow reassigning `const` variables",
      "category": "ECMAScript 6",
      "recommended": true
    },
    "schema": []
  },
  "no-constant-condition": {
    "docs": {
      "description": "disallow constant expressions in conditions",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-continue": {
    "docs": {
      "description": "disallow `continue` statements",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": []
  },
  "no-control-regex": {
    "docs": {
      "description": "disallow control characters in regular expressions",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-debugger": {
    "docs": {
      "description": "disallow the use of `debugger`",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-delete-var": {
    "docs": {
      "description": "disallow deleting variables",
      "category": "Variables",
      "recommended": true
    },
    "schema": []
  },
  "no-div-regex": {
    "docs": {
      "description": "disallow division operators explicitly at the beginning of regular expressions",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-dupe-args": {
    "docs": {
      "description": "disallow duplicate arguments in `function` definitions",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-dupe-class-members": {
    "docs": {
      "description": "disallow duplicate class members",
      "category": "ECMAScript 6",
      "recommended": true
    },
    "schema": []
  },
  "no-dupe-keys": {
    "docs": {
      "description": "disallow duplicate keys in object literals",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-duplicate-case": {
    "docs": {
      "description": "disallow duplicate case labels",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-duplicate-imports": {
    "docs": {
      "description": "disallow duplicate module imports",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "includeExports": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-else-return": {
    "docs": {
      "description": "disallow `else` blocks after `return` statements in `if` statements",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-empty-character-class": {
    "docs": {
      "description": "disallow empty character classes in regular expressions",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-empty-function": {
    "docs": {
      "description": "disallow empty functions",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "allow": {
            "type": "array",
            "items": {
              "enum": [
                "functions",
                "arrowFunctions",
                "generatorFunctions",
                "methods",
                "generatorMethods",
                "getters",
                "setters",
                "constructors"
              ]
            },
            "uniqueItems": true
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-empty-pattern": {
    "docs": {
      "description": "disallow empty destructuring patterns",
      "category": "Best Practices",
      "recommended": true
    },
    "schema": []
  },
  "no-empty": {
    "docs": {
      "description": "disallow empty block statements",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "allowEmptyCatch": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-eq-null": {
    "docs": {
      "description": "disallow `null` comparisons without type-checking operators",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-eval": {
    "docs": {
      "description": "disallow the use of `eval()`",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "allowIndirect": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-ex-assign": {
    "docs": {
      "description": "disallow reassigning exceptions in `catch` clauses",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-extend-native": {
    "docs": {
      "description": "disallow extending native types",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "exceptions": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "uniqueItems": true
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-extra-bind": {
    "docs": {
      "description": "disallow unnecessary calls to `.bind()`",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-extra-boolean-cast": {
    "docs": {
      "description": "disallow unnecessary boolean casts",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-extra-label": {
    "docs": {
      "description": "disallow unnecessary labels",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-extra-parens": {
    "docs": {
      "description": "disallow unnecessary parentheses",
      "category": "Possible Errors",
      "recommended": false
    },
    "schema": {
      "anyOf": [
        {
          "type": "array",
          "items": [
            {
              "enum": [
                "functions"
              ]
            }
          ],
          "minItems": 0,
          "maxItems": 1
        },
        {
          "type": "array",
          "items": [
            {
              "enum": [
                "all"
              ]
            },
            {
              "type": "object",
              "properties": {
                "conditionalAssign": {
                  "type": "boolean"
                },
                "nestedBinaryExpressions": {
                  "type": "boolean"
                },
                "returnAssign": {
                  "type": "boolean"
                }
              },
              "additionalProperties": false
            }
          ],
          "minItems": 0,
          "maxItems": 2
        }
      ]
    }
  },
  "no-extra-semi": {
    "docs": {
      "description": "disallow unnecessary semicolons",
      "category": "Possible Errors",
      "recommended": true
    },
    "fixable": "code",
    "schema": []
  },
  "no-fallthrough": {
    "docs": {
      "description": "disallow fallthrough of `case` statements",
      "category": "Best Practices",
      "recommended": true
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "commentPattern": {
            "type": "string"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-floating-decimal": {
    "docs": {
      "description": "disallow leading or trailing decimal points in numeric literals",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-func-assign": {
    "docs": {
      "description": "disallow reassigning `function` declarations",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-implicit-coercion": {
    "docs": {
      "description": "disallow shorthand type conversions",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "boolean": {
            "type": "boolean"
          },
          "number": {
            "type": "boolean"
          },
          "string": {
            "type": "boolean"
          },
          "allow": {
            "type": "array",
            "items": {
              "enum": [
                "~",
                "!!",
                "+",
                "*"
              ]
            },
            "uniqueItems": true
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-implicit-globals": {
    "docs": {
      "description": "disallow `var` and named `function` declarations in the global scope",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-implied-eval": {
    "docs": {
      "description": "disallow the use of `eval()`-like methods",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-inline-comments": {
    "docs": {
      "description": "disallow inline comments after code",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": []
  },
  "no-inner-declarations": {
    "docs": {
      "description": "disallow `function` or `var` declarations in nested blocks",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": [
      {
        "enum": [
          "functions",
          "both"
        ]
      }
    ]
  },
  "no-invalid-regexp": {
    "docs": {
      "description": "disallow invalid regular expression strings in `RegExp` constructors",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "allowConstructorFlags": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-invalid-this": {
    "docs": {
      "description": "disallow `this` keywords outside of classes or class-like objects",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-irregular-whitespace": {
    "docs": {
      "description": "disallow irregular whitespace outside of strings and comments",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "skipComments": {
            "type": "boolean"
          },
          "skipStrings": {
            "type": "boolean"
          },
          "skipTemplates": {
            "type": "boolean"
          },
          "skipRegExps": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-iterator": {
    "docs": {
      "description": "disallow the use of the `__iterator__` property",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-label-var": {
    "docs": {
      "description": "disallow labels that share a name with a variable",
      "category": "Variables",
      "recommended": false
    },
    "schema": []
  },
  "no-labels": {
    "docs": {
      "description": "disallow labeled statements",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "allowLoop": {
            "type": "boolean"
          },
          "allowSwitch": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-lone-blocks": {
    "docs": {
      "description": "disallow unnecessary nested blocks",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-lonely-if": {
    "docs": {
      "description": "disallow `if` statements as the only statement in `else` blocks",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": []
  },
  "no-loop-func": {
    "docs": {
      "description": "disallow `function` declarations and expressions inside loop statements",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-magic-numbers": {
    "docs": {
      "description": "disallow magic numbers",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "detectObjects": {
            "type": "boolean"
          },
          "enforceConst": {
            "type": "boolean"
          },
          "ignore": {
            "type": "array",
            "items": {
              "type": "number"
            },
            "uniqueItems": true
          },
          "ignoreArrayIndexes": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-mixed-requires": {
    "docs": {
      "description": "disallow `require` calls to be mixed with regular `var` declarations",
      "category": "Node.js and CommonJS",
      "recommended": false
    },
    "schema": [
      {
        "oneOf": [
          {
            "type": "boolean"
          },
          {
            "type": "object",
            "properties": {
              "grouping": {
                "type": "boolean"
              },
              "allowCall": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "no-mixed-spaces-and-tabs": {
    "docs": {
      "description": "disallow mixed spaces and tabs for indentation",
      "category": "Stylistic Issues",
      "recommended": true
    },
    "schema": [
      {
        "enum": [
          "smart-tabs",
          true,
          false
        ]
      }
    ]
  },
  "no-multi-spaces": {
    "docs": {
      "description": "disallow multiple spaces",
      "category": "Best Practices",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "type": "object",
        "properties": {
          "exceptions": {
            "type": "object",
            "patternProperties": {
              "^([A-Z][a-z]*)+$": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-multi-str": {
    "docs": {
      "description": "disallow multiline strings",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-multiple-empty-lines": {
    "docs": {
      "description": "disallow multiple empty lines",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "max": {
            "type": "integer",
            "minimum": 0
          },
          "maxEOF": {
            "type": "integer",
            "minimum": 0
          },
          "maxBOF": {
            "type": "integer",
            "minimum": 0
          }
        },
        "required": [
          "max"
        ],
        "additionalProperties": false
      }
    ]
  },
  "no-native-reassign": {
    "docs": {
      "description": "disallow reassigning native objects",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "exceptions": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "uniqueItems": true
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-negated-condition": {
    "docs": {
      "description": "disallow negated conditions",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": []
  },
  "no-negated-in-lhs": {
    "docs": {
      "description": "disallow negating the left operand in `in` expressions",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-nested-ternary": {
    "docs": {
      "description": "disallow nested ternary expressions",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": []
  },
  "no-new-func": {
    "docs": {
      "description": "disallow `new` operators with the `Function` object",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-new-object": {
    "docs": {
      "description": "disallow `Object` constructors",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": []
  },
  "no-new-require": {
    "docs": {
      "description": "disallow `new` operators with calls to `require`",
      "category": "Node.js and CommonJS",
      "recommended": false
    },
    "schema": []
  },
  "no-new-symbol": {
    "docs": {
      "description": "disallow `new` operators with the `Symbol` object",
      "category": "ECMAScript 6",
      "recommended": true
    },
    "schema": []
  },
  "no-new-wrappers": {
    "docs": {
      "description": "disallow `new` operators with the `String`, `Number`, and `Boolean` objects",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-new": {
    "docs": {
      "description": "disallow `new` operators outside of assignments or comparisons",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-obj-calls": {
    "docs": {
      "description": "disallow calling global object properties as functions",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-octal-escape": {
    "docs": {
      "description": "disallow octal escape sequences in string literals",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-octal": {
    "docs": {
      "description": "disallow octal literals",
      "category": "Best Practices",
      "recommended": true
    },
    "schema": []
  },
  "no-param-reassign": {
    "docs": {
      "description": "disallow reassigning `function` parameters",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "props": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-path-concat": {
    "docs": {
      "description": "disallow string concatenation with `__dirname` and `__filename`",
      "category": "Node.js and CommonJS",
      "recommended": false
    },
    "schema": []
  },
  "no-plusplus": {
    "docs": {
      "description": "disallow the unary operators `++` and `--`",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "allowForLoopAfterthoughts": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-process-env": {
    "docs": {
      "description": "disallow the use of `process.env`",
      "category": "Node.js and CommonJS",
      "recommended": false
    },
    "schema": []
  },
  "no-process-exit": {
    "docs": {
      "description": "disallow the use of `process.exit()`",
      "category": "Node.js and CommonJS",
      "recommended": false
    },
    "schema": []
  },
  "no-proto": {
    "docs": {
      "description": "disallow the use of the `__proto__` property",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-redeclare": {
    "docs": {
      "description": "disallow `var` redeclaration",
      "category": "Best Practices",
      "recommended": true
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "builtinGlobals": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-regex-spaces": {
    "docs": {
      "description": "disallow multiple spaces in regular expression literals",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-restricted-globals": {
    "docs": {
      "description": "disallow specified global variables",
      "category": "Variables",
      "recommended": false
    },
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "uniqueItems": true
    }
  },
  "no-restricted-imports": {
    "docs": {
      "description": "disallow specified modules when loaded by `import`",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "uniqueItems": true
    }
  },
  "no-restricted-modules": {
    "docs": {
      "description": "disallow specified modules when loaded by `require`",
      "category": "Node.js and CommonJS",
      "recommended": false
    },
    "schema": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "uniqueItems": true
    }
  },
  "no-restricted-syntax": {
    "docs": {
      "description": "disallow specified syntax",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": {
      "type": "array",
      "items": [
        {
          "enum": [
            "AssignmentExpression",
            "AssignmentPattern",
            "ArrayExpression",
            "ArrayPattern",
            "ArrowFunctionExpression",
            "BlockStatement",
            "BinaryExpression",
            "BreakStatement",
            "CallExpression",
            "CatchClause",
            "ClassBody",
            "ClassDeclaration",
            "ClassExpression",
            "ConditionalExpression",
            "ContinueStatement",
            "DoWhileStatement",
            "DebuggerStatement",
            "EmptyStatement",
            "ExperimentalRestProperty",
            "ExperimentalSpreadProperty",
            "ExpressionStatement",
            "ForStatement",
            "ForInStatement",
            "ForOfStatement",
            "FunctionDeclaration",
            "FunctionExpression",
            "Identifier",
            "IfStatement",
            "Literal",
            "LabeledStatement",
            "LogicalExpression",
            "MemberExpression",
            "MetaProperty",
            "MethodDefinition",
            "NewExpression",
            "ObjectExpression",
            "ObjectPattern",
            "Program",
            "Property",
            "RestElement",
            "ReturnStatement",
            "SequenceExpression",
            "SpreadElement",
            "Super",
            "SwitchCase",
            "SwitchStatement",
            "TaggedTemplateExpression",
            "TemplateElement",
            "TemplateLiteral",
            "ThisExpression",
            "ThrowStatement",
            "TryStatement",
            "UnaryExpression",
            "UpdateExpression",
            "VariableDeclaration",
            "VariableDeclarator",
            "WhileStatement",
            "WithStatement",
            "YieldExpression",
            "JSXIdentifier",
            "JSXNamespacedName",
            "JSXMemberExpression",
            "JSXEmptyExpression",
            "JSXExpressionContainer",
            "JSXElement",
            "JSXClosingElement",
            "JSXOpeningElement",
            "JSXAttribute",
            "JSXSpreadAttribute",
            "JSXText",
            "ExportDefaultDeclaration",
            "ExportNamedDeclaration",
            "ExportAllDeclaration",
            "ExportSpecifier",
            "ImportDeclaration",
            "ImportSpecifier",
            "ImportDefaultSpecifier",
            "ImportNamespaceSpecifier"
          ]
        }
      ],
      "uniqueItems": true,
      "minItems": 0
    }
  },
  "no-return-assign": {
    "docs": {
      "description": "disallow assignment operators in `return` statements",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "except-parens",
          "always"
        ]
      }
    ]
  },
  "no-script-url": {
    "docs": {
      "description": "disallow `javascript",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-self-assign": {
    "docs": {
      "description": "disallow assignments where both sides are exactly the same",
      "category": "Best Practices",
      "recommended": true
    },
    "schema": []
  },
  "no-self-compare": {
    "docs": {
      "description": "disallow comparisons where both sides are exactly the same",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-sequences": {
    "docs": {
      "description": "disallow comma operators",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-shadow-restricted-names": {
    "docs": {
      "description": "disallow identifiers from shadowing restricted names",
      "category": "Variables",
      "recommended": false
    },
    "schema": []
  },
  "no-shadow": {
    "docs": {
      "description": "disallow `var` declarations from shadowing variables in the outer scope",
      "category": "Variables",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "builtinGlobals": {
            "type": "boolean"
          },
          "hoist": {
            "enum": [
              "all",
              "functions",
              "never"
            ]
          },
          "allow": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-spaced-func": {
    "docs": {
      "description": "disallow spacing between `function` identifiers and their applications",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": []
  },
  "no-sparse-arrays": {
    "docs": {
      "description": "disallow sparse arrays",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-sync": {
    "docs": {
      "description": "disallow synchronous methods",
      "category": "Node.js and CommonJS",
      "recommended": false
    },
    "schema": []
  },
  "no-ternary": {
    "docs": {
      "description": "disallow ternary operators",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": []
  },
  "no-this-before-super": {
    "docs": {
      "description": "disallow `this`/`super` before calling `super()` in constructors",
      "category": "ECMAScript 6",
      "recommended": true
    },
    "schema": []
  },
  "no-throw-literal": {
    "docs": {
      "description": "disallow throwing literals as exceptions",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-trailing-spaces": {
    "docs": {
      "description": "disallow trailing whitespace at the end of lines",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "type": "object",
        "properties": {
          "skipBlankLines": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-undef-init": {
    "docs": {
      "description": "disallow initializing variables to `undefined`",
      "category": "Variables",
      "recommended": false
    },
    "schema": []
  },
  "no-undef": {
    "docs": {
      "description": "disallow the use of undeclared variables unless mentioned in `/*global */` comments",
      "category": "Variables",
      "recommended": true
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "typeof": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-undefined": {
    "docs": {
      "description": "disallow the use of `undefined` as an identifier",
      "category": "Variables",
      "recommended": false
    },
    "schema": []
  },
  "no-underscore-dangle": {
    "docs": {
      "description": "disallow dangling underscores in identifiers",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "allow": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "allowAfterThis": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-unexpected-multiline": {
    "docs": {
      "description": "disallow confusing multiline expressions",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-unmodified-loop-condition": {
    "docs": {
      "description": "disallow unmodified loop conditions",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-unneeded-ternary": {
    "docs": {
      "description": "disallow ternary operators when simpler alternatives exist",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "defaultAssignment": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-unreachable": {
    "docs": {
      "description": "disallow unreachable code after `return`, `throw`, `continue`, and `break` statements",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "no-unsafe-finally": {
    "docs": {
      "description": "disallow control flow statements in finally blocks",
      "category": "Possible Errors",
      "recommended": false
    }
  },
  "no-unused-expressions": {
    "docs": {
      "description": "disallow unused expressions",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "allowShortCircuit": {
            "type": "boolean"
          },
          "allowTernary": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-unused-labels": {
    "docs": {
      "description": "disallow unused labels",
      "category": "Best Practices",
      "recommended": true
    },
    "schema": []
  },
  "no-unused-vars": {
    "docs": {
      "description": "disallow unused variables",
      "category": "Variables",
      "recommended": true
    },
    "schema": [
      {
        "oneOf": [
          {
            "enum": [
              "all",
              "local"
            ]
          },
          {
            "type": "object",
            "properties": {
              "vars": {
                "enum": [
                  "all",
                  "local"
                ]
              },
              "varsIgnorePattern": {
                "type": "string"
              },
              "args": {
                "enum": [
                  "all",
                  "after-used",
                  "none"
                ]
              },
              "argsIgnorePattern": {
                "type": "string"
              },
              "caughtErrors": {
                "enum": [
                  "all",
                  "none"
                ]
              },
              "caughtErrorsIgnorePattern": {
                "type": "string"
              }
            }
          }
        ]
      }
    ]
  },
  "no-use-before-define": {
    "docs": {
      "description": "disallow the use of variables before they are defined",
      "category": "Variables",
      "recommended": false
    },
    "schema": [
      {
        "oneOf": [
          {
            "enum": [
              "nofunc"
            ]
          },
          {
            "type": "object",
            "properties": {
              "functions": {
                "type": "boolean"
              },
              "classes": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "no-useless-call": {
    "docs": {
      "description": "disallow unnecessary calls to `.call()` and `.apply()`",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-useless-computed-key": {
    "docs": {
      "description": "disallow unnecessary computed property keys in object literals",
      "category": "ECMAScript 6",
      "recommended": false
    }
  },
  "no-useless-concat": {
    "docs": {
      "description": "disallow unnecessary concatenation of literals or template literals",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-useless-constructor": {
    "docs": {
      "description": "disallow unnecessary constructors",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": []
  },
  "no-useless-escape": {
    "docs": {
      "description": "disallow unnecessary escape characters",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-var": {
    "docs": {
      "description": "require `let` or `const` instead of `var`",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": []
  },
  "no-void": {
    "docs": {
      "description": "disallow `void` operators",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "no-warning-comments": {
    "docs": {
      "description": "disallow specified warning terms in comments",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "terms": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "location": {
            "enum": [
              "start",
              "anywhere"
            ]
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "no-whitespace-before-property": {
    "docs": {
      "description": "disallow whitespace before properties",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": []
  },
  "no-with": {
    "docs": {
      "description": "disallow `with` statements",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "object-curly-spacing": {
    "docs": {
      "description": "enforce consistent spacing inside braces",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "enum": [
          "always",
          "never"
        ]
      },
      {
        "type": "object",
        "properties": {
          "arraysInObjects": {
            "type": "boolean"
          },
          "objectsInObjects": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "object-property-newline": {
    "docs": {
      "description": "enforce placing object properties on separate lines",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "allowMultiplePropertiesPerLine": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "object-shorthand": {
    "docs": {
      "description": "require or disallow method and property shorthand syntax for object literals",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": {
      "anyOf": [
        {
          "type": "array",
          "items": [
            {
              "enum": [
                "always",
                "methods",
                "properties",
                "never"
              ]
            }
          ],
          "minItems": 0,
          "maxItems": 1
        },
        {
          "type": "array",
          "items": [
            {
              "enum": [
                "always",
                "methods",
                "properties"
              ]
            },
            {
              "type": "object",
              "properties": {
                "avoidQuotes": {
                  "type": "boolean"
                }
              },
              "additionalProperties": false
            }
          ],
          "minItems": 0,
          "maxItems": 2
        },
        {
          "type": "array",
          "items": [
            {
              "enum": [
                "always",
                "methods"
              ]
            },
            {
              "type": "object",
              "properties": {
                "ignoreConstructors": {
                  "type": "boolean"
                },
                "avoidQuotes": {
                  "type": "boolean"
                }
              },
              "additionalProperties": false
            }
          ],
          "minItems": 0,
          "maxItems": 2
        }
      ]
    }
  },
  "one-var-declaration-per-line": {
    "docs": {
      "description": "require or disallow newlines around `var` declarations",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "always",
          "initializations"
        ]
      }
    ]
  },
  "one-var": {
    "docs": {
      "description": "enforce variables to be declared either together or separately in functions",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "oneOf": [
          {
            "enum": [
              "always",
              "never"
            ]
          },
          {
            "type": "object",
            "properties": {
              "var": {
                "enum": [
                  "always",
                  "never"
                ]
              },
              "let": {
                "enum": [
                  "always",
                  "never"
                ]
              },
              "const": {
                "enum": [
                  "always",
                  "never"
                ]
              }
            },
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "initialized": {
                "enum": [
                  "always",
                  "never"
                ]
              },
              "uninitialized": {
                "enum": [
                  "always",
                  "never"
                ]
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "operator-assignment": {
    "docs": {
      "description": "require or disallow assignment operator shorthand where possible",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "always",
          "never"
        ]
      }
    ]
  },
  "operator-linebreak": {
    "docs": {
      "description": "enforce consistent linebreak style for operators",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "after",
          "before",
          "none",
          null
        ]
      },
      {
        "type": "object",
        "properties": {
          "overrides": {
            "type": "object",
            "properties": {
              "anyOf": {
                "type": "string",
                "enum": [
                  "after",
                  "before",
                  "none",
                  "ignore"
                ]
              }
            }
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "padded-blocks": {
    "docs": {
      "description": "require or disallow padding within blocks",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "oneOf": [
          {
            "enum": [
              "always",
              "never"
            ]
          },
          {
            "type": "object",
            "properties": {
              "blocks": {
                "enum": [
                  "always",
                  "never"
                ]
              },
              "switches": {
                "enum": [
                  "always",
                  "never"
                ]
              },
              "classes": {
                "enum": [
                  "always",
                  "never"
                ]
              }
            },
            "additionalProperties": false,
            "minProperties": 1
          }
        ]
      }
    ]
  },
  "prefer-arrow-callback": {
    "docs": {
      "description": "require arrow functions as callbacks",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "allowNamedFunctions": {
            "type": "boolean"
          },
          "allowUnboundThis": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "prefer-const": {
    "docs": {
      "description": "require `const` declarations for variables that are never reassigned after declared",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "destructuring": {
            "enum": [
              "any",
              "all"
            ]
          },
          "ignoreReadBeforeAssign": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "prefer-reflect": {
    "docs": {
      "description": "require `Reflect` methods where applicable",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "exceptions": {
            "type": "array",
            "items": {
              "enum": [
                "apply",
                "call",
                "delete",
                "defineProperty",
                "getOwnPropertyDescriptor",
                "getPrototypeOf",
                "setPrototypeOf",
                "isExtensible",
                "getOwnPropertyNames",
                "preventExtensions"
              ]
            },
            "uniqueItems": true
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "prefer-rest-params": {
    "docs": {
      "description": "require rest parameters instead of `arguments`",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": []
  },
  "prefer-spread": {
    "docs": {
      "description": "require spread operators instead of `.apply()`",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": []
  },
  "prefer-template": {
    "docs": {
      "description": "require template literals instead of string concatenation",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": []
  },
  "quote-props": {
    "docs": {
      "description": "require quotes around object literal property names",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": {
      "anyOf": [
        {
          "type": "array",
          "items": [
            {
              "enum": [
                "always",
                "as-needed",
                "consistent",
                "consistent-as-needed"
              ]
            }
          ],
          "minItems": 0,
          "maxItems": 1
        },
        {
          "type": "array",
          "items": [
            {
              "enum": [
                "always",
                "as-needed",
                "consistent",
                "consistent-as-needed"
              ]
            },
            {
              "type": "object",
              "properties": {
                "keywords": {
                  "type": "boolean"
                },
                "unnecessary": {
                  "type": "boolean"
                },
                "numbers": {
                  "type": "boolean"
                }
              },
              "additionalProperties": false
            }
          ],
          "minItems": 0,
          "maxItems": 2
        }
      ]
    }
  },
  "quotes": {
    "docs": {
      "description": "enforce the consistent use of either backticks, double, or single quotes",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "code",
    "schema": [
      {
        "enum": [
          "single",
          "double",
          "backtick"
        ]
      },
      {
        "anyOf": [
          {
            "enum": [
              "avoid-escape"
            ]
          },
          {
            "type": "object",
            "properties": {
              "avoidEscape": {
                "type": "boolean"
              },
              "allowTemplateLiterals": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "radix": {
    "docs": {
      "description": "enforce the consistent use of the radix argument when using `parseInt()`",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "always",
          "as-needed"
        ]
      }
    ]
  },
  "require-jsdoc": {
    "docs": {
      "description": "require JSDoc comments",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "require": {
            "type": "object",
            "properties": {
              "ClassDeclaration": {
                "type": "boolean"
              },
              "MethodDefinition": {
                "type": "boolean"
              },
              "FunctionDeclaration": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "require-yield": {
    "docs": {
      "description": "require generator functions to contain `yield`",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": []
  },
  "semi-spacing": {
    "docs": {
      "description": "enforce consistent spacing before and after semicolons",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "type": "object",
        "properties": {
          "before": {
            "type": "boolean"
          },
          "after": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "semi": {
    "docs": {
      "description": "require or disallow semicolons instead of ASI",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "code",
    "schema": {
      "anyOf": [
        {
          "type": "array",
          "items": [
            {
              "enum": [
                "never"
              ]
            }
          ],
          "minItems": 0,
          "maxItems": 1
        },
        {
          "type": "array",
          "items": [
            {
              "enum": [
                "always"
              ]
            },
            {
              "type": "object",
              "properties": {
                "omitLastInOneLineBlock": {
                  "type": "boolean"
                }
              },
              "additionalProperties": false
            }
          ],
          "minItems": 0,
          "maxItems": 2
        }
      ]
    }
  },
  "sort-imports": {
    "docs": {
      "description": "enforce sorted import declarations within modules",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "ignoreCase": {
            "type": "boolean"
          },
          "memberSyntaxSortOrder": {
            "type": "array",
            "items": {
              "enum": [
                "none",
                "all",
                "multiple",
                "single"
              ]
            },
            "uniqueItems": true,
            "minItems": 4,
            "maxItems": 4
          },
          "ignoreMemberSort": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "sort-vars": {
    "docs": {
      "description": "require variables within the same declaration block to be sorted",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "ignoreCase": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "space-before-blocks": {
    "docs": {
      "description": "enforce consistent spacing before blocks",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "oneOf": [
          {
            "enum": [
              "always",
              "never"
            ]
          },
          {
            "type": "object",
            "properties": {
              "keywords": {
                "enum": [
                  "always",
                  "never"
                ]
              },
              "functions": {
                "enum": [
                  "always",
                  "never"
                ]
              },
              "classes": {
                "enum": [
                  "always",
                  "never"
                ]
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "space-before-function-paren": {
    "docs": {
      "description": "enforce consistent spacing before `function` definition opening parenthesis",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "oneOf": [
          {
            "enum": [
              "always",
              "never"
            ]
          },
          {
            "type": "object",
            "properties": {
              "anonymous": {
                "enum": [
                  "always",
                  "never",
                  "ignore"
                ]
              },
              "named": {
                "enum": [
                  "always",
                  "never",
                  "ignore"
                ]
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "space-in-parens": {
    "docs": {
      "description": "enforce consistent spacing inside parentheses",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "enum": [
          "always",
          "never"
        ]
      },
      {
        "type": "object",
        "properties": {
          "exceptions": {
            "type": "array",
            "items": {
              "enum": [
                "{}",
                "[]",
                "()",
                "empty"
              ]
            },
            "uniqueItems": true
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "space-infix-ops": {
    "docs": {
      "description": "require spacing around operators",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "type": "object",
        "properties": {
          "int32Hint": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "space-unary-ops": {
    "docs": {
      "description": "enforce consistent spacing before or after unary operators",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "type": "object",
        "properties": {
          "words": {
            "type": "boolean"
          },
          "nonwords": {
            "type": "boolean"
          },
          "overrides": {
            "type": "object",
            "additionalProperties": {
              "type": "boolean"
            }
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "spaced-comment": {
    "docs": {
      "description": "enforce consistent spacing after the `//` or `/*` in a comment",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "enum": [
          "always",
          "never"
        ]
      },
      {
        "type": "object",
        "properties": {
          "exceptions": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "markers": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "line": {
            "type": "object",
            "properties": {
              "exceptions": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "markers": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "additionalProperties": false
          },
          "block": {
            "type": "object",
            "properties": {
              "exceptions": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              },
              "markers": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            },
            "additionalProperties": false
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "strict": {
    "docs": {
      "description": "require or disallow strict mode directives",
      "category": "Strict Mode",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "never",
          "global",
          "function",
          "safe"
        ]
      }
    ]
  },
  "template-curly-spacing": {
    "docs": {
      "description": "require or disallow spacing around embedded expressions of template strings",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "enum": [
          "always",
          "never"
        ]
      }
    ]
  },
  "use-isnan": {
    "docs": {
      "description": "require calls to `isNaN()` when checking for `NaN`",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "valid-jsdoc": {
    "docs": {
      "description": "enforce valid JSDoc comments",
      "category": "Possible Errors",
      "recommended": false
    },
    "schema": [
      {
        "type": "object",
        "properties": {
          "prefer": {
            "type": "object",
            "additionalProperties": {
              "type": "string"
            }
          },
          "preferType": {
            "type": "object",
            "additionalProperties": {
              "type": "string"
            }
          },
          "requireReturn": {
            "type": "boolean"
          },
          "requireParamDescription": {
            "type": "boolean"
          },
          "requireReturnDescription": {
            "type": "boolean"
          },
          "matchDescription": {
            "type": "string"
          },
          "requireReturnType": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  },
  "valid-typeof": {
    "docs": {
      "description": "enforce comparing `typeof` expressions against valid strings",
      "category": "Possible Errors",
      "recommended": true
    },
    "schema": []
  },
  "vars-on-top": {
    "docs": {
      "description": "require `var` declarations be placed at the top of their containing scope",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": []
  },
  "wrap-iife": {
    "docs": {
      "description": "require parentheses around immediate `function` invocations",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "outside",
          "inside",
          "any"
        ]
      }
    ]
  },
  "wrap-regex": {
    "docs": {
      "description": "require parenthesis around regex literals",
      "category": "Stylistic Issues",
      "recommended": false
    },
    "schema": []
  },
  "yield-star-spacing": {
    "docs": {
      "description": "require or disallow spacing around the `*` in `yield*` expressions",
      "category": "ECMAScript 6",
      "recommended": false
    },
    "fixable": "whitespace",
    "schema": [
      {
        "oneOf": [
          {
            "enum": [
              "before",
              "after",
              "both",
              "neither"
            ]
          },
          {
            "type": "object",
            "properties": {
              "before": {
                "type": "boolean"
              },
              "after": {
                "type": "boolean"
              }
            },
            "additionalProperties": false
          }
        ]
      }
    ]
  },
  "yoda": {
    "docs": {
      "description": "require or disallow \"Yoda\" conditions",
      "category": "Best Practices",
      "recommended": false
    },
    "schema": [
      {
        "enum": [
          "always",
          "never"
        ]
      },
      {
        "type": "object",
        "properties": {
          "exceptRange": {
            "type": "boolean"
          },
          "onlyEquality": {
            "type": "boolean"
          }
        },
        "additionalProperties": false
      }
    ]
  }
}