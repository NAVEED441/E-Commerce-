import { Document } from "mongoose";
import { ProductInterface} from "../Product.Interface";
export interface IOrder extends Document{
    _id:string;
    Product: ProductInterface[];
    Customer: string;
    Delivery:string;
    Bill:number;
    TotalBill:number
    createdAt?: string;
    updatedAt?: string;

}