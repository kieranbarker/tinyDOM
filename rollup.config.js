/*!
 * Based on Chris Ferdinandi's 'Build Tool Boilerplate'
 * https://github.com/cferdinandi/build-tool-boilerplate
 */

//
// Imports
//

// Terser
import { terser } from 'rollup-plugin-terser';

// package.json
import pkg from './package.json';


//
// Variables
//

// Copyright banner for output files
const banner = `/*! ${pkg.name} v${pkg.version} | (c) ${new Date().getFullYear()} ${pkg.author.name} | ${pkg.license} License | ${pkg.repository.url} */`;

// Desired output formats
const formats = ['iife', 'es', 'amd', 'cjs'];


//
// Functions
//

/**
 * Create a single output object
 * @param {String} format The format to use
 * @param {Boolean} minify Whether to minify the output
 * @returns {Object} The output object
 */
function createOutput (format, minify) {
  // Configure the suffix for this output
  const suffix = (format === 'iife' ? '' : `.${format}`) + (minify ? '.min' : '');

  // Create the output object
  const output = {
    file: `./dist/tinydom${suffix}.js`,
    format: format,
    banner: banner,
    preferConst: true
  };

  // If IIFE, set namespace
  if (format === 'iife') {
    output.name = '$';
  }

  // If minifying, set Terser plugin
  if (minify) {
    output.plugins = [terser()];
  }

  // Return the output object
  return output;
}

/**
 * Create the final object to be exported
 * @returns {Object} The object to be exported
 */
function createExport () {
  // Create the development and production outputs
  const developmentOutputs = formats.map(format => createOutput(format, false));
  const productionOutputs = formats.map(format => createOutput(format, true));

  // Concatenate the development and production outputs
  const outputs = developmentOutputs.concat(productionOutputs);

  // Return the final object
  return {
    input: './src/tinydom.js',
    output: outputs
  };
}


//
// Exports
//

// Export the final object
export default createExport();
