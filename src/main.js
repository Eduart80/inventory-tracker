"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
// Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
// Hint: Utilize polymorphism to your advantage here.
// Compile and Run the Program:
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const taxCalculator_1 = require("./utils/taxCalculator");
let products = [
    new PhysicalProduct_1.PhysicalProduct('P001 Flash drive', 'DELL', 32, 25),
    new DigitalProduct_1.DigitalProduct('DEL_102', 'Moon Light', 29, 15)
];
for (let product of products) {
    // console.log(product.displayDetails())
    // console.log(product.getPriceWithTax())
    // console.log('Price with Tax:', `$${calculateTax(product).toFixed(2)}`);
    console.log(product.displayDetails());
    if (product instanceof PhysicalProduct_1.PhysicalProduct) {
        console.log('Weight:', product.productWeight);
    }
    else if (product instanceof DigitalProduct_1.DigitalProduct) {
        console.log('File Size:', product.price);
    }
    console.log('Price with Tax:', `$${(0, taxCalculator_1.calculateTax)(product).toFixed(2)}`);
    console.log('---');
}
