import { Coffee } from "./Coffee";
export interface CoffeeOrder{
    coffeeOrder: Coffee[];
    completed:boolean;
    customerName:string;
    orderNumber:string;
}