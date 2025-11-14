
// Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
// Add a weight property (number) for physical products.
// Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
// Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).
// Create the DigitalProduct Subclass:
import {Product} from './Product'
class PhysicalProduct extends Product {
    // weight:number
    constructor(sku:string, name:string, price:number){
        super(sku, name, price)
        // this.weight=weight
    }

    // getPriceWithTax():string{
    //     return 'getPrice with tax'
    // }
    
}

export {PhysicalProduct}