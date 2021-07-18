import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const path = require('path');

const minifyTemplatePlugin = {
  name: 'minify-template',
  transform(code) {
    return {
      code: code.replace(/`[^`]*`/g, (template) => template
        .replace(/\n/g, '')
        .replace(/  +/g, ' ')
        .replace(/> /g, '>')
        .replace(/ </g, '<')
        .replace(/: /g, ':')
        .replace(/; /g, ';')),
    };
  },
};

const commonPlugins = [
  resolve(),
  alias({ entries: { '@': path.join(process.cwd(), 'src') } }),
];

const envDependentPlugins = process.env.PRODUCTION ? [
  esbuild({ minify: true }),
  minifyTemplatePlugin,
] : [
  serve({ contentBase: 'build', open: true }),
  livereload(),
];

export default {
  input: 'src/index.js',
  plugins: [...commonPlugins, ...envDependentPlugins],
  context: 'null',
  moduleContext: 'null',
  output: {
    file: 'build/bundle.js',
    format: 'iife',
  },
};
