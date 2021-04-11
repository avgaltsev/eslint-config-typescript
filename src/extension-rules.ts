export = {
	overrides: [
		{
			files: ["*.ts", "*.tsx"],

			rules: {
				// Enforce consistent brace style for blocks
				// "brace-style": "off",
				// "@typescript-eslint/brace-style": "off",

				// Require or disallow trailing comma
				// "comma-dangle": "off",
				// "@typescript-eslint/comma-dangle": "off",

				// Enforces consistent spacing before and after commas
				// "comma-spacing": "off",
				// "@typescript-eslint/comma-spacing": "off",

				// Enforce default parameters to be last
				// "default-param-last": "off",
				// "@typescript-eslint/default-param-last": "off",

				// enforce dot notation whenever possible
				// "dot-notation": "off",
				// "@typescript-eslint/dot-notation": "off",

				// Require or disallow spacing between function identifiers and their invocations
				// "func-call-spacing": "off",
				// "@typescript-eslint/func-call-spacing": "off",

				// Enforce consistent indentation
				// "indent": "off",
				// "@typescript-eslint/indent": "off",

				// require or disallow initialization in variable declarations
				// "init-declarations": "off",
				// "@typescript-eslint/init-declarations": "off",

				// Enforce consistent spacing before and after keywords
				// "keyword-spacing": "off",
				// "@typescript-eslint/keyword-spacing": "off",

				// Require or disallow an empty line between class members
				// "lines-between-class-members": "off",
				// "@typescript-eslint/lines-between-class-members": "off",

				// Disallow generic Array constructors
				"no-array-constructor": "off",
				"@typescript-eslint/no-array-constructor": "error",

				// Disallow duplicate class members
				// "no-dupe-class-members": "off",
				// "@typescript-eslint/no-dupe-class-members": "off",

				// Disallow duplicate imports
				// "no-duplicate-imports": "off",
				// "@typescript-eslint/no-duplicate-imports": "off",

				// Disallow empty functions
				"no-empty-function": "off",
				"@typescript-eslint/no-empty-function": "error",

				// Disallow unnecessary parentheses
				// "no-extra-parens": "off",
				// "@typescript-eslint/no-extra-parens": "off",

				// Disallow unnecessary semicolons
				"no-extra-semi": "off",
				"@typescript-eslint/no-extra-semi": "error",

				// Disallow the use of eval()-like methods
				// "no-implied-eval": "off",
				// "@typescript-eslint/no-implied-eval": "off",

				// Disallow this keywords outside of classes or class-like objects
				// "no-invalid-this": "off",
				// "@typescript-eslint/no-invalid-this": "off",

				// Disallow function declarations that contain unsafe references inside loop statements
				// "no-loop-func": "off",
				// "@typescript-eslint/no-loop-func": "off",

				// Disallow literal numbers that lose precision
				// "no-loss-of-precision": "off",
				// "@typescript-eslint/no-loss-of-precision": "off",

				// Disallow magic numbers
				// "no-magic-numbers": "off",
				// "@typescript-eslint/no-magic-numbers": "off",

				// Disallow variable redeclaration
				// "no-redeclare": "off",
				// "@typescript-eslint/no-redeclare": "off",

				// Disallow variable declarations from shadowing variables declared in the outer scope
				// "no-shadow": "off",
				// "@typescript-eslint/no-shadow": "off",

				// Disallow throwing literals as exceptions
				// "no-throw-literal": "off",
				// "@typescript-eslint/no-throw-literal": "off",

				// Disallow unused expressions
				// "no-unused-expressions": "off",
				// "@typescript-eslint/no-unused-expressions": "off",

				// Disallow unused variables
				"no-unused-vars": "off",
				"@typescript-eslint/no-unused-vars": "warn",

				// Disallow the use of variables before they are defined
				// "no-use-before-define": "off",
				// "@typescript-eslint/no-use-before-define": "off",

				// Disallow unnecessary constructors
				// "no-useless-constructor": "off",
				// "@typescript-eslint/no-useless-constructor": "off",

				// Enforce consistent spacing inside braces
				// "object-curly-spacing": "off",
				// "@typescript-eslint/object-curly-spacing": "off",

				// Enforce the consistent use of either backticks, double, or single quotes
				// "quotes": "off",
				// "@typescript-eslint/quotes": "off",

				// Disallow async functions which have no await expression
				// "require-await": "off",
				// "@typescript-eslint/require-await": "off",

				// Enforces consistent returning of awaited values
				// "return-await": "off",
				// "@typescript-eslint/return-await": "off",

				// Require or disallow semicolons instead of ASI
				// "semi": "off",
				// "@typescript-eslint/semi": "off",

				// Enforces consistent spacing before function parenthesis
				// "space-before-function-paren": "off",
				// "@typescript-eslint/space-before-function-paren": "off",

				// This rule is aimed at ensuring there are spaces around infix operators.
				// "space-infix-ops": "off",
				// "@typescript-eslint/space-infix-ops": "off",
			},
		},
	],
};
