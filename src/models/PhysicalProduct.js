"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicalProduct = void 0;
// Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
// Add a weight property (number) for physical products.
// Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
// Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
// Create the DigitalProduct Subclass:
const Product_1 = require("./Product");
class PhysicalProduct extends Product_1.Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    get productWeight() {
        return `${this.weight} kg`;
    }
    getPriceWithTax() {
        return this.price * 1.10;
    }
}
exports.PhysicalProduct = PhysicalProduct;
