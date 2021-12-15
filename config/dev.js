import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve';

export default {
	input: 'scripts/index.js',
	output: {
		file: '_site/bundle.js',
		format: 'iife',
		sourcemap: true,
	},
	plugins: [
    resolve({
      browser: true,
      main: true,
      extensions: ['.js', '.jsx']
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    babel({
      babelHelpers: 'bundled',
      presets: ["@babel/preset-env", "@babel/preset-react"],
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**'
    }),
	],
};
