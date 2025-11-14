
import {PhysicalProduct} from './models/PhysicalProduct'
import {DigitalProduct} from './models/DigitalProduct'
import {calculateTax} from './utils/taxCalculator'

let products =[ 
new PhysicalProduct('Flash drive', 'DELL',32,25),

new DigitalProduct( 'E-Book', 'Moon Light',29,15)
]

for(let product of products){
    // console.log(product.displayDetails())
    // console.log(product.getPriceWithTax())
    // console.log('Price with Tax:', `$${calculateTax(product).toFixed(2)}`);
 console.log(product.displayDetails());
    if (product instanceof PhysicalProduct) {
        console.log('Weight:', product.productWeight);
    } else if (product instanceof DigitalProduct) {
        console.log('File Size:', product.price);
    }
    console.log('Price with Tax:', `$${calculateTax(product).toFixed(2)}`);
    console.log('---');

}
