
import {Product}from './Product'

class DigitalProduct extends Product {
    private _fileSize: number;
    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this._fileSize = fileSize;
    }

    getPriceWithTax():number{
        return this.price
    }
    
}

export {DigitalProduct}