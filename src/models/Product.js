"use strict";

const strict = require("assert/strict");

// Inside src/models/Product.ts, create a Product base class with the following:
// Properties: sku (string), name (string), price (number).
// Methods:
// displayDetails() - a method that returns a formatted string with the product’s details.
// getPriceWithTax() - a method that calculates the final price of the product with tax.
// Create the PhysicalProduct Subclass:

class Product {
   constructor(sku, name, price) {
    this.sku=sku
   }
}