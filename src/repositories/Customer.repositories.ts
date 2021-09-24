import { ICustomer } from "../types/document/ICustomer";
import { CustomerSchema } from "../model/customer.model";
import { LogInReq } from "../types/request/Customer.req";

export class MainCustomer{
    constructor(){}
    saveCustomer(savecustmr:ICustomer){
        return new CustomerSchema(savecustmr).save();
    }
    updateCustomer(updatcustmr:ICustomer){
        
        return CustomerSchema.findByIdAndUpdate(updatcustmr._id, updatcustmr,{
            new:true
        });
    }
    loginClient(loginClient:LogInReq){
       
        return  CustomerSchema.findOne({UserName: loginClient.UserName, Password: loginClient.Password})
        
        }
}