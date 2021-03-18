import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import visualizer from 'rollup-plugin-visualizer';
import typescript from 'rollup-plugin-typescript';
import pkg from './package.json';

export default {
  input: './src/components/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [
    external(),
    postcss(),
    typescript({
      lib: ['es5', 'es6', 'dom'],
      target: 'es5',
      jsx: 'react',
      typescript: require('typescript')
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    resolve(),
    commonjs(),
    image(),
    visualizer()
  ]
};
