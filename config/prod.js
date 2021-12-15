
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

import config from './dev';

config.output.file = '_site/bundle.min.js';
config.output.sourcemap = false;
config.plugins[1] = replace({ 'process.env.NODE_ENV': JSON.stringify('production'), preventAssignment: true });
config.plugins.push(terser());

export default config;
