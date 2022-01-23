module.exports = {
	root: true,
	env: {
		browser: true,
		'es6': true,
		node: true,
	},
	extends: [
		'eslint:recommended',
	],
	'parserOptions': {
		'ecmaVersion': 2020,
	},
	// 'parser': '@babel/eslint-parser',
	rules: {
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
		'no-new': 0,
		'no-tabs': 'off',
		'key-spacing': ['error', { mode: 'strict' }],
		'no-unused-vars': [
			'error',
			{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
		],
		'camelcase': 'off',
		'no-extend-native': 'off', // Позволить расширять нативные объекты Array, Object, String...
		'no-console': [
			'warn',
			{ allow: ['warn', 'error', 'time', 'info', 'timeEnd'] },
		],
		'node/no-path-concat': 'off',
		'no-var': 'error',
		'indent': ['error', 'tab'],
		'object-curly-spacing': ['warn', 'always'],
		'space-before-function-paren': 'off',
		'require-await': 'off',
		'keyword-spacing': ['error', { before: true }],
		'curly': 'error',
		'brace-style': ['error'],
		'no-empty': ['error', { allowEmptyCatch: true }],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'never',
				prev: 'import',
				next: 'import',
			},
			{ blankLine: 'always', prev: '*', next: ['return', 'function'] },
			{ blankLine: 'always', prev: 'function', next: '*' },
		],
		'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
		'eqeqeq': ['error', 'always'],
		'space-before-blocks': 'error',
	},
};
