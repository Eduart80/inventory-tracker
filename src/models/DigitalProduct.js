"use strict";
// Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.
// Add a fileSize property (number) for digital products.
// Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
// Use a getter method to return the formatted file size in megabytes.
// Create a Tax Calculator Utility:
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
const Product_1 = require("./Product");
class DigitalProduct extends Product_1.Product {
    _fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this._fileSize = fileSize;
    }
    getPriceWithTax() {
        return this.price;
    }
}
exports.DigitalProduct = DigitalProduct;
