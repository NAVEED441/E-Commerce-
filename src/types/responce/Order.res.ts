import { ProductInterface } from "../Product.Interface";
export interface SaveUpdateResOrder{
    _id:string;
    Product: ProductInterface[];
    Customer: string;
    Delivery:string;
    Bill:number;
    TotalBill:number
    createdAt?: string;
    updatedAt?: string;
}