import { Schema, model } from "mongoose";
import { IOrder } from "../types/document/IOrder";

const IOrderSchema = new Schema({
    Product: [{
       product:{type: Schema.Types.ObjectId,
        ref: 'ProductSchema',},
       quantity:{type:Number},
       price:{type:Number,}
    }],
    Customer: {type: Schema.Types.ObjectId,
		              ref: 'CustomerSchema',},
    Delivery:{type:String},
    Bill:{type:Number},
    TotalBill:{type:Number},
},
{
    timestamps:true
});
export const OrderSchema = model<IOrder>('OrderSchema',IOrderSchema);