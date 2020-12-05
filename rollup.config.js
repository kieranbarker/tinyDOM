import { terser } from 'rollup-plugin-terser';
import { version, author, license, repository } from './package.json';

const banner = `/*! tinyDOM v${version} | (c) ${new Date().getFullYear()} ${author.name} | ${license} License | ${repository.url} */`;

export default [
  {
    input: './src/iife.js',
    output: [
      {
        banner: banner,
        file: './dist/tinydom.js',
        format: 'iife',
        name: '$',
        preferConst: true
      },
      {
        banner: banner,
        file: './dist/tinydom.min.js',
        format: 'iife',
        name: '$',
        plugins: [terser()],
        preferConst: true
      }
    ]
  },
  {
    input: './src/module.js',
    output: [
      {
        banner: banner,
        file: './dist/tinydom.cjs.js',
        format: 'cjs',
        preferConst: true
      },
      {
        banner: banner,
        file: './dist/tinydom.cjs.min.js',
        format: 'cjs',
        plugins: [terser()],
        preferConst: true
      },
      {
        banner: banner,
        file: './dist/tinydom.es.js',
        format: 'es',
        preferConst: true
      },
      {
        banner: banner,
        file: './dist/tinydom.es.min.js',
        format: 'es',
        plugins: [terser()],
        preferConst: true
      },
      {
        banner: banner,
        file: './dist/tinydom.amd.js',
        format: 'amd',
        preferConst: true
      },
      {
        banner: banner,
        file: './dist/tinydom.amd.min.js',
        format: 'amd',
        plugins: [terser()],
        preferConst: true
      }
    ]
  }
];