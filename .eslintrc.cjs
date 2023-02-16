module.exports = {
	root: true,
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:jsx-a11y/strict",
		"plugin:solid/typescript",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	plugins: ["jsx-a11y", "solid", "@typescript-eslint", "import", "prettier"],
	parserOptions: {
		ecmaVersion: "latest",
		project: "./tsconfig.json",
		sourceType: "module",
	},
	rules: {
		"solid/components-return-once": "off",
		"solid/event-handlers": "off",
		"solid/imports": "off",
		"solid/jsx-no-duplicate-props": "off",
		"solid/jsx-no-script-url": "off",
		"solid/jsx-no-undef": "off",
		"solid/jsx-uses-vars": "off",
		"solid/no-destructure": "off",
		"solid/no-innerhtml": "off",
		"solid/no-react-specific-props": "off",
		"solid/no-unknown-namespaces": "off",
		"solid/prefer-classlist": "off",
		"solid/prefer-for": "off",
		"solid/prefer-show": "off",
		"solid/reactivity": "off",
		"solid/self-closing-comp": "off",
		"solid/style-prop": "off",
		"no-undef": "off",
		"import/no-unresolved": "error",
		"prettier/prettier": "error",
		"prefer-template": "error",
		"require-await": "error",
		"no-sequences": "off",
		"no-shadow": "error",
		"no-unneeded-ternary": "error",
		"no-lonely-if": "error",
		"no-restricted-syntax": [
			"error",
			{
				selector: "TSEnumDeclaration",
				message: "Don't declare typescript enums",
			},
			{
				selector: "TSModuleDeclaration",
				message: "Don't declare typescript namespaces",
			},
			{
				selector: "TSParameterProperty",
				message: "Don't use typescript parameter properties",
			},
		],
		"no-restricted-imports": [
			"error",
			{
				patterns: ["..*"],
			},
		],
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					"internal",
					"parent",
					"sibling",
					"index",
					"type",
				],
				"newlines-between": "never",
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
			},
		],
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
			solid: [".js", ".jsx", ".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
				project: "./tsconfig.json",
			},
		},
	},
};
