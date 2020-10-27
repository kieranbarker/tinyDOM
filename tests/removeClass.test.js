// Import TinyDOM
const TinyDOM = require('../dist/tinydom.cjs');

test('Removes a class from all matching elements', () => {
  // Set the HTML body
  document.body.innerHTML = `
    <p class="some-class">Paragraph 1</p>
    <p class="some-class">Paragraph 2</p>
    <p class="some-class">Paragraph 3</p>
  `;

  // Create a new TinyDOM instance
  const paragraphs = new TinyDOM('p');

  // Remove a class from all matching elements
  paragraphs.removeClass('some-class');

  // Get an array of each element's className property
  const classes = paragraphs.items().map(item => item.className);

  // Create the expected array
  const expected = new Array(3).fill('');

  // Expect the arrays to be the same
  expect(classes).toEqual(expected);
});