
import { Product } from "../models/Product";
export function calculateTax(param : Product) : Number{
    return param.getPriceWithTax()
}
