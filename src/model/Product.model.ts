import { Schema,model } from "mongoose";
import { IProduct } from "../types/document/IProduct";


const IProductSchema = new Schema ({
    Name:{type:String,required:true},
   
    Price:{type:String ,required:true},
    Discription:{type:String ,required:true},
       
},
{timestamps:true}
);
export const ProductSchema = model<IProduct>('ProductSchema', IProductSchema);