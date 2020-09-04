'use strict';

module.exports = {
	"parserOptions": {
		"ecmaVersion": 7,
		"sourceType": "module"
	},
	"env": {
		"es6": true,
		"browser": true,
		"node": true
	},
	"plugins": ["import"],
	"rules": {
		"import/extensions": [2, "ignorePackages"],
		"no-unused-vars": 2,
		"no-undef": 2,
		"eqeqeq": 2,
		"guard-for-in": 2,
		"no-extend-native": 2,
		"wrap-iife": 2,
		"new-cap": 2,
		"no-caller": 2,
		"no-multi-str": 0,
		"dot-notation": 0,
		"semi": [2, "always"],
		"strict": [2, "global"],
		"valid-jsdoc": 1,
		"no-irregular-whitespace": 1,
		"no-multi-spaces": 2,
		"one-var": [2, "never"],
		"constructor-super": 2,
		"no-this-before-super": 2,
		"no-var": 2,
		"prefer-const": 1,
		"no-const-assign": 2,
		"indent": ["error", "tab", {"SwitchCase": 1}],
		"no-trailing-spaces": 2,
		"no-await-in-loop": 2,
		"no-compare-neg-zero": 2,
		"no-cond-assign": 2,
		"no-console": 1,
		"no-constant-condition": 2,
		"no-control-regex": 2,
		"no-debugger": 2,
		"no-dupe-args": 2,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-empty": 1,
		"no-empty-character-class": 2,
		"no-ex-assign": 2,
		"no-extra-boolean-cast": 2,
		"no-extra-parens": 1,
		"no-extra-semi": 2,
		"no-func-assign": 2,
		"no-inner-declarations": 2,
		"no-invalid-regexp": 2,
		"no-obj-calls": 2,
		"no-prototype-builtins": 1,
		"no-regex-spaces": 2,
		"no-sparse-arrays": 2,
		"no-template-curly-in-string": 2,
		"no-unexpected-multiline": 2,
		"no-unreachable": 2,
		"no-unsafe-finally": 2,
		"no-unsafe-negation": 2,
		"use-isnan": 2,
		"valid-typeof": 2,
		"accessor-pairs": 2,
		"array-callback-return": 2,
		"block-scoped-var": 2,
		"class-methods-use-this": 2,
		"default-case": 2,
		"no-alert": 2,
		"no-case-declarations": 2,
		"no-div-regex": 2,
		"no-empty-function": 1,
		"no-empty-pattern": 2,
		"no-eq-null": 2,
		"no-eval": 2,
		"no-extra-bind": 2,
		"no-extra-label": 2,
		"no-fallthrough": 2,
		"no-floating-decimal": 2,
		"no-global-assign": 2,
		"no-implicit-coercion": 1,
		"no-implicit-globals": 2,
		"no-implied-eval": 2,
		"no-iterator": 2,
		"no-labels": 2,
		"no-lone-blocks": 2,
		"no-loop-func": 2,
		"no-new-func": 2,
		"no-new-wrappers": 2,
		"no-octal": 2,
		"no-octal-escape": 2,
		"no-proto": 2,
		"no-redeclare": 2,
		"no-restricted-properties": 2,
		"no-return-assign": 2,
		"no-return-await": 2,
		"no-script-url": 2,
		"no-self-assign": 2,
		"no-self-compare": 2,
		"no-sequences": 2,
		"no-throw-literal": 2,
		"no-unmodified-loop-condition": 2,
		"no-unused-expressions": 2,
		"no-unused-labels": 2,
		"no-useless-call": 2,
		"no-useless-concat": 2,
		"no-useless-return": 2,
		"no-void": 2,
		"no-with": 2,
		"prefer-promise-reject-errors": 2,
		"require-await": 2,
		"vars-on-top": 2,
		"curly": 2,
		"radix": 2,
		"yoda": 2
	},
	"globals": {
		"require": false,
		"module": false,
		"exports": false,
		"requireText": false
	}
};
