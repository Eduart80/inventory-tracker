
// Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
// Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
// Hint: Utilize polymorphism to your advantage here.
// Compile and Run the Program:
import {PhysicalProduct} from './models/PhysicalProduct'
import {DigitalProduct} from './models/DigitalProduct'
import {calculateTax} from './utils/taxCalculator'


new PhysicalProduct(21, 'Magnet',12)
new DigitalProduct

for(let product of PhysicalProduct){
    console.log(product)
}
