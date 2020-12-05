// Import TinyDOM
const { TinyDOM: $ } = require('../dist/tinydom.cjs');

test('Returns the last matching element', () => {
  // Set the HTML body
  document.body.innerHTML = `
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
    <p>Paragraph 3</p>
  `;

  // Create a new TinyDOM instance
  const paragraphs = new $('p');

  // Get the last matching element
  const last = paragraphs.last();

  // Get the expected element
  const expected = document.body.querySelector('p:last-of-type');

  // Expect the same element
  expect(last).toBe(expected);
});