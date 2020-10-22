# tinyDOM

A tiny DOM manipulation library written in ES6 with zero dependencies.

⚠️ **This project is still in the early stages of development.** ⚠️

* [Installation](#installation)
* [Creating a new instance](#creating-a-new-instance)
* [Instance methods](#instance-methods)

## Installation

To get started, [download the files directly from GitHub](https://github.com/kieranbarker/tinyDOM/archive/main.zip).

Compiled and production-ready code can be found in the `dist` directory. The `src` directory contains development code.

Include tinyDOM before your own scripts. As a best practice, you should place your scripts directly before the closing `</body>` tag:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Cool App</title>
  </head>
  <body>
    <h1>My Cool App</h1>
    <script src="tinydom.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>
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
