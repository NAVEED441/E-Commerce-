import { Schema,model } from "mongoose";
import { ICustomer } from "../types/document/ICustomer";


const ICustomerSchema = new Schema ({
    Name :{type:String},
    Cell :{type:String},
    Adress:{type:String},
    UserName:{type:String, required:true},
    Password:{type:String, required:true}
},
{timestamps:true}
);
export const CustomerSchema = model<ICustomer>('CustomerSchema', ICustomerSchema);