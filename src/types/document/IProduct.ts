import { Document } from "mongoose";

export interface IProduct extends Document{
    _id:string;
    Name:string;
    Price:string;
    Discription:string;
    createdAt?: string;
    updatedAt?: string;
}
