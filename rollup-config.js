import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const unbreakTemplatePlugin = {
  name: 'unbreak-template',
  transform(code) {
    return {
      code: code.replace(/`[^`]*`/g, (template) => template.replace(/\n/g, '')),
    };
  },
};

const commonPlugins = [
  resolve(),
  alias({ entries: { '@': process.cwd() } }),
];

const envDependentPlugins = process.env.PRODUCTION ? [
  esbuild({ minify: true }),
  unbreakTemplatePlugin,
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
