
import {Product} from './Product';

class PhysicalProduct extends Product {
    private weight:number
   
    constructor(sku:string, name:string, price:number, weight:number){
        super(sku, name, price)
        this.weight=weight
    }

    get productWeight():string{
        return `${this.weight} kg`;
    }
    getPriceWithTax():number{
       return this.price * 1.10
    }
    
}

export {PhysicalProduct}