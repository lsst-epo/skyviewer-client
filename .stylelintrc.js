const projectName = "rubin";

module.exports = {
  plugins: ["stylelint-scss"],
  extends: ["stylelint-config-standard-scss", "stylelint-config-recess-order"],
  ignoreFiles: ["theme/styles/base/_resets.scss"],
  defaultSeverity: "error",
  rules: {
    "declaration-empty-line-before": "never",
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["first-nested", "after-same-name", "blockless-after-same-name-blockless"],
        ignore: ["after-comment"],
        ignoreAtRules: ["mixin", "include", "use", "else"]
      },
    ],
    "string-quotes": "single",
    "function-calc-no-unspaced-operator": true,
    "shorthand-property-no-redundant-values": true,
    "declaration-block-no-redundant-longhand-properties": true,
    // SCSS compiler shouldn't allow this
    // 'block-no-empty': true,
    // "comment-no-empty": false,
    "max-nesting-depth": 3,
    // SCSS compiler shouldn't allow this
    // 'no-extra-semicolons': true,
    "number-max-precision": 3,
    "property-no-vendor-prefix": true,
    // OK, sometimes you need to use important, but
    // it should be explicitly called out/disabled if/when used.
    "declaration-no-important": true,
    "declaration-block-single-line-max-declarations": 1,
    "selector-class-pattern": "[a-z][a-z0-9-]*",
    // No id's allowed!! Unless accounted for
    "selector-max-id": 0,
    "selector-no-vendor-prefix": true,
    "function-name-case": "lower",
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "unit-case": "lower",
    "value-keyword-case": [
      "lower",
      {
        ignoreKeywords: [],
      },
    ],
    "value-list-comma-space-after": "always-single-line",
    "property-case": "lower",
    "declaration-bang-space-before": "always",
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-trailing-semicolon": "always",
    "block-closing-brace-newline-before": "always",
    "block-opening-brace-newline-after": "always",
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "double",
    "selector-type-case": "lower",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested"],
        ignore: ["after-comment"],
      },
    ],
    "media-feature-name-case": "lower",
    indentation: 2,
    "max-empty-lines": 3,
    "no-eol-whitespace": true,
    // SCSS rules
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-function-pattern": "([a-z]+[0-9]*)([a-z0-9-]+)?",
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-mixin-argumentless-call-parentheses": "never",
    "scss/at-mixin-pattern": "([a-z]+[0-9]*)([a-z0-9-]+)?",
    "scss/dollar-variable-pattern": "([a-z]+[0-9]*)([a-z0-9-]+)?",
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/percent-placeholder-pattern": "[a-z][a-z0-9-]*",
    // Arbitrary media values can be used, but explicitly
    "scss/media-feature-value-dollar-variable": "always",
    "scss/selector-no-redundant-nesting-selector": true,
  },
};
