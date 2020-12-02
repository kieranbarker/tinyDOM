/*! tinyDOM v1.0.2 | (c) 2020 Kieran Barker | MIT License | https://github.com/kieranbarker/tinyDOM.git */
const $ = (function () {
  'use strict';

  class TinyDOM {

    /**
     * Create a new TinyDOM instance
     * @param {String} selector A CSS selector string
     */
    constructor (selector) {
      this.nodes = [...document.querySelectorAll(selector)];
    }

    /**
     * Get an immutable copy of the matching elements
     * @returns {Element[]} An immutable copy of the matching elements
     */
    items () {
      return [...this.nodes];
    }

    /**
     * Get the first matching element
     * @returns {Element} The first matching element
     */
    first () {
      return this.nodes[0];
    }

    /**
     * Get the last matching element
     * @returns {Element} The last matching element
     */
    last () {
      return this.nodes[this.nodes.length - 1];
    }

    /**
     * Add a class to all matching elements
     * @param {String} className The class to be added
     * @returns {TinyDOM} The instance on which this method was called
     */
    addClass (className) {
      // Add the class
      this.items().forEach(function (item) {
        item.classList.add(className);
      });

      // Return the current instance
      return this;
    }

    /**
     * Remove a class from all matching elements
     * @param {String} className The class to be removed
     * @returns {TinyDOM} The instance on which this method was called
     */
    removeClass (className) {
      // Remove the class
      this.items().forEach(function (item) {
        item.classList.remove(className);
      });

      // Return the current instance
      return this;
    }

  }

  return TinyDOM;

}());
