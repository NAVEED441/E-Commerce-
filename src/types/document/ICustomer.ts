import { Document } from "mongoose";

export interface ICustomer extends Document{
    _id:string;
    Name:string;
    Cell:string;
    Adress:string;
    UserName:string;
    Password:string;
    createdAt?: string;
   updatedAt?: string;
}