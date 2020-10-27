// Import TinyDOM
const TinyDOM = require('../dist/tinydom.cjs');

test('Returns the first matching element', () => {
  // Set the HTML body
  document.body.innerHTML = `
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
  `;

  // Create a new TinyDOM instance
  const paragraphs = new TinyDOM('p');

  // Get the first matching element
  const first = paragraphs.first();

  // Get the expected element
  const expected = document.body.querySelector('p');

  // Expect the same element
  expect(first).toBe(expected);
});