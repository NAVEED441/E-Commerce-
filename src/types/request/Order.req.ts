import { ProductInterface } from "../Product.Interface";
export interface SaveReqOrder {
    Product: ProductInterface[];
    Customer:string,
    Delivery:string;
   
   
}

export interface GetReqOrder{
    Id:string;
} 
export interface GetcustomerOrder{
    Id:string;
}