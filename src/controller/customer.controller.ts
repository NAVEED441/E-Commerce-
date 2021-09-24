import { ICustomer } from "../types/document/ICustomer";
import {  Route, Tags, Post, Body,  Put, } from "tsoa";
import { MainCustomer } from "../repositories/Customer.repositories";
import { SaveReqCustomer, UpdateReqCustomer,LogInReq } from "../types/request/Customer.req";
import { SaveUpdateRes,LoginResponce } from "../types/responce/Customer.Res";
import CustomeError from '../utills/error';
@Route('customer')
@Tags('customer')
export class CustomerController{
    constructor(){}
    @Post('/savecustomer')
    async saveCustomer(@Body() savereq:SaveReqCustomer):Promise<SaveUpdateRes>{
        const new_customer:ICustomer = await new MainCustomer().saveCustomer(<ICustomer>(savereq));
          return <SaveUpdateRes>(new_customer);
    }
    @Put('/updatcustomer')
    async updateCustomer(@Body() updatereq:UpdateReqCustomer): Promise<SaveUpdateRes>{
      
        const update_cust:ICustomer = await new MainCustomer().updateCustomer(<ICustomer>(updatereq))
        if(update_cust===null){
            throw new CustomeError(400, 'Admin not updated');
        }
        return <SaveUpdateRes>update_cust;
    }
    @Post('/loginuser')
  async loginUser(@Body() logreq:LogInReq):Promise<SaveUpdateRes>{
    const loginclent:ICustomer =<any> await new MainCustomer().loginClient(logreq);
    return <SaveUpdateRes>loginclent;
  }
}
