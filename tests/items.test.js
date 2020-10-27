// Import TinyDOM
const TinyDOM = require('../dist/tinydom.cjs');

test('Returns an immutable copy of the matching elements', () => {
  // Set the HTML body
  document.body.innerHTML = `
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
  `;

  // Create a new TinyDOM instance
  const paragraphs = new TinyDOM('p');

  // Get the matching elements
  const nodes = paragraphs.nodes;

  // Get an immutable copy of the matching elements
  const items = paragraphs.items();

  // Get the expected array
  const expected = [...document.body.querySelectorAll('p')];

  // Expect the arrays to be the same
  expect(items).toEqual(expected);

  // Expect an immutable copy
  expect(items).not.toBe(nodes);
});