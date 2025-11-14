"use strict";
// Inside src/models/Product.ts, create a Product base class with the following:
// Properties: sku (string), name (string), price (number).
// Methods:
// displayDetails() - a method that returns a formatted string with the product’s details.
// getPriceWithTax() - a method that calculates the final price of the product with tax.
// Create the PhysicalProduct Subclass:
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku,
            this.name = name,
            this.price = price;
    }
    displayDetails() {
        return `SKU: ${this.sku}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
    }
}
exports.Product = Product;
