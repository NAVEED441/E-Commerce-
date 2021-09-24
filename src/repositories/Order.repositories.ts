import { IOrder } from "../types/document/IOrder";
import { OrderSchema } from "../model/Order.Model";
import { GetReqOrder, SaveReqOrder } from "../types/request/Order.req";
import { Mongoose } from "mongoose";
export class MainOrder{
    constructor(){

    }
    saveOrder(saveorder:SaveReqOrder){
          return new OrderSchema(saveorder).save();
    };
    getOrder(_id:string){
      return  OrderSchema.findById(_id);
    };
   
    getallOrder(_id:string){
        return  OrderSchema.find({
          Customer:_id
        } )
    }


}