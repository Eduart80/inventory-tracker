
// Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.
// Add a fileSize property (number) for digital products.
// Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
// Use a getter method to return the formatted file size in megabytes.
// Create a Tax Calculator Utility:

import {Product}from './Product'

class DigitalProduct extends Product {
    private _fileSize: number;
    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this._fileSize = fileSize;
    }

    getPriceWithTax():number{
        return this.fileSize
    }
    
}

export {DigitalProduct}