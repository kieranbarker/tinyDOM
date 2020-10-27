// Import TinyDOM
const TinyDOM = require('../dist/tinydom.cjs');

test('Adds a class to all matching elements', () => {
  // Set the HTML body
  document.body.innerHTML = `
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
  `;

  // Create a new TinyDOM instance
  const paragraphs = new TinyDOM('p');

  // Add a class to all matching elements
  paragraphs.addClass('some-class');

  // Get an array of each element's className property
  const classes = paragraphs.items().map(item => item.className);

  // Create the expected array
  const expected = new Array(3).fill('some-class');

  // Expect the arrays to be the same
  expect(classes).toEqual(expected);
});