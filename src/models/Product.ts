// Inside src/models/Product.ts, create a Product base class with the following:
// Properties: sku (string), name (string), price (number).
// Methods:
// displayDetails() - a method that returns a formatted string with the product’s details.
// getPriceWithTax() - a method that calculates the final price of the product with tax.
// Create the PhysicalProduct Subclass:

export class Product {
    sku:string;
    name:string;
    price:number;

    constructor(sku:string, name:string, price:number){
        this.sku=sku,
        this.name=name,
        this.price=price
    }

        displayDetails():string {
            return `Is Product details`
        }
         getPriceWithTax():number {
            return this.price +(1 * 2)
         }

}
