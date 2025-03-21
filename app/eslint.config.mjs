import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname
});

const eslintConfig = [
	...compat.extends('next'),
	{
		plugins: { '@stylistic': stylistic },
		rules: {
			// Configuração regras do Stylistic
			'@stylistic/object-curly-spacing': ['warn', 'always', { 'objectsInObjects': true, 'arraysInObjects': false }],
			'@stylistic/brace-style': ['warn', '1tbs', { 'allowSingleLine': true }],
			'@stylistic/no-trailing-spaces': ['warn'],
			'@stylistic/no-whitespace-before-property': ['warn'],
			'@stylistic/quotes': ['warn', 'single'],
			'@stylistic/rest-spread-spacing': ['warn', 'never'],
			'@stylistic/semi': ['warn', 'always'],
			'@stylistic/semi-spacing': ['warn', { 'before': false, 'after': true }],
			'@stylistic/space-before-blocks': ['warn', 'always'],
			'@stylistic/space-before-function-paren': ['warn', 'never'],
			'@stylistic/space-in-parens': ['warn', 'never'],
			'@stylistic/spaced-comment': ['warn', 'always'],
			'@stylistic/switch-colon-spacing': ['warn', { 'after': true, 'before': false }],
			'@stylistic/template-curly-spacing': ['error', 'never'],
			'@stylistic/no-multiple-empty-lines': ['warn', { 'max': 1 }],
			'@stylistic/array-bracket-newline': ['warn', 'consistent'],
			'@stylistic/arrow-spacing': ['warn', { 'before': true, 'after': true }],
			'@stylistic/block-spacing': ['warn', 'always'],
			'@stylistic/comma-dangle': ['warn', 'never'],
			'@stylistic/comma-spacing': ['warn', { 'before': false, 'after': true }],
			'@stylistic/comma-style': ['warn', 'last'],
			'@stylistic/computed-property-spacing': ['warn', 'never'],
			'@stylistic/dot-location': ['warn', 'property'],
			'@stylistic/eol-last': ['warn', 'always'],
			'@stylistic/function-call-argument-newline': ['warn', 'consistent'],
			'@stylistic/func-call-spacing': ['warn', 'never'],
			'@stylistic/function-paren-newline': ['warn', 'consistent'],
			'@stylistic/implicit-arrow-linebreak': ['warn', 'beside'],
			'@stylistic/indent': ['warn', 'tab', { 'SwitchCase': 1 }],
			'@stylistic/jsx-quotes': ['warn', 'prefer-single'],
			'@stylistic/key-spacing': ['warn', { 'beforeColon': false, 'afterColon': true }],
			'@stylistic/keyword-spacing': ['warn', { 'before': true, 'after': true }],
			'@stylistic/lines-around-comment': ['warn'],
			'@stylistic/multiline-comment-style': ['warn', 'starred-block'],
			'@stylistic/multiline-ternary': ['warn', 'never'],
			'@stylistic/new-parens': ['warn', 'always'],
			'@stylistic/no-extra-semi': ['warn'],
			'@stylistic/no-floating-decimal': ['warn'],
			'@stylistic/no-mixed-spaces-and-tabs': ['warn'],
			'@stylistic/jsx-curly-spacing': ['warn', { 'when': 'never', 'children': true }],
			'@stylistic/jsx-equals-spacing': ['warn', 'never'],
			'@stylistic/jsx-first-prop-new-line': ['warn', 'multiline-multiprop'],
			'@stylistic/array-bracket-spacing': ['warn', 'never'],
			'@stylistic/arrow-parens': ['warn', 'always'],
			'@stylistic/type-named-tuple-spacing': ['warn'],
			'@stylistic/type-generic-spacing': ['warn'],

			// Configuração regras do Eslint
			'no-unused-vars': ['warn'],
			'func-style': ['warn', 'declaration', { 'allowArrowFunctions': false }],
			'yoda': ['warn']
		}
	}
];

export default eslintConfig;
