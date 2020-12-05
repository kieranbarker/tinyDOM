# tinyDOM

A tiny DOM manipulation library written in ES6 with zero dependencies.

1. [Installation](#installation)
2. [Creating a new instance](#creating-a-new-instance)
3. [Instance methods](#instance-methods)

## Installation

### Script Tag

The easiest way to get started is by using the jsDelivr CDN via an HTML `<script></script>` tag.

tinyDOM uses [semantic versioning](https://semver.org). You can grab a major, minor, or patch version from the CDN with the @1.2.3 syntax. You can find all available versions under [releases](https://github.com/kieranbarker/tinyDOM/releases).

```html
<script src="https://cdn.jsdelivr.net/npm/tiny-dom@2/dist/tinydom.min.js"></script>
```

You can also [download the files directly from GitHub](https://github.com/kieranbarker/tinyDOM/archive/main.zip).

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code.

```html
<script src="path/to/tinydom.min.js"></script>
```

### ES Module

tinyDOM also supports modern browsers and module bundlers (Rollup, Webpack, Snowpack, etc.) using the ES module `import` syntax. Use the `.es` version.

```js
import { TinyDOM as $ } from 'https://cdn.jsdelivr.net/npm/tiny-dom@2/dist/tinydom.es.min.js';
```

### npm

You can also use npm (or your favourite package manager). First, install the package via the command line.

```shell
npm i tiny-dom
```

Then import the package.

```js
import { TinyDOM as $ } from 'tiny-dom';
```

### CommonJS

If you use Node.js, you can import TinyDOM using the `require()` method with the `.cjs` version.

```js
const { TinyDOM: $ } = require('https://cdn.jsdelivr.net/npm/tiny-dom@2/dist/tinydom.cjs.min.js');
```

### AMD

If you use RequireJS, SystemJS, or another AMD format, you can import TinyDOM with the `.amd` version.

```js
requirejs(['https://cdn.jsdelivr.net/npm/tiny-dom@2/dist/tinydom.amd.min.js'], function ({ TinyDOM: $ }) {
  //...
});
```

## Creating a new instance

To create a new tinyDOM instance, simply instantiate the class using the `new` operator.

Like jQuery, tinyDOM uses the `$` namespace. You can pass in any valid [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) string:

```js
// Create a new TinyDOM instance
const paragraphs = new $('p');
```

## Instance methods

### items()

Get an immutable copy of the matching elements.

**Parameters:** None.

**Returns:** An array of matching `Element` objects.

```js
// Create a new TinyDOM instance
const paragraphs = new $('p');

// Get an immutable copy of the matching elements
const paragraphsCopy = paragraphs.items();
```

### first()

Get the first matching element.

**Parameters:** None.

**Returns:** The first matching `Element` object.

```js
// Create a new TinyDOM instance
const paragraphs = new $('p');

// Get the first matching element
const firstParagraph = paragraphs.first();
```

### last()

Get the last matching element.

**Parameters:** None.

**Returns:** The last matching `Element` object.


```js
// Create a new TinyDOM instance
const paragraphs = new $('p');

// Get the last matching element
const lastParagraph = paragraphs.last();
```

### addClass()

Add a class to all matching elements.

**Parameters:** A string representing the class to be added.

**Returns:** The tinyDOM instance on which `addClass()` was called.


```js
// Create a new TinyDOM instance
const paragraphs = new $('p');

// Add a class to all matching elements
paragraphs.addClass('is-active');
```

### removeClass()

Remove a class from all matching elements.

**Parameters:** A string representing the class to be removed.

**Returns:** The tinyDOM instance on which `removeClass()` was called.

```js
// Create a new TinyDOM instance
const paragraphs = new $('p');

// Remove a class from all matching elements
paragraphs.removeClass('is-active');
```
