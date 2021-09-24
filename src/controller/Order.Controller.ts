import { IOrder } from "../types/document/IOrder";

import { Tags,Body,Get,Post,Delete,Route,Put,SuccessResponse,Security } from "tsoa";
import { MainOrder } from "../repositories/Order.repositories";
import { SaveReqOrder, GetReqOrder, GetcustomerOrder} from "../types/request/Order.req";
import { SaveUpdateResOrder } from "../types/responce/Order.res";
import CustomeError from '../utills/error';
@Route('order')
@Tags('order')
export class OrderController{
  constructor(){}
 // @Security("token")
  @Post('/saveorder')
  async saveOrder(@Body() savereq:SaveReqOrder):Promise<SaveUpdateResOrder>{
      const save_order:IOrder =  await new MainOrder().saveOrder(<IOrder>(savereq));
     
      return <SaveUpdateResOrder>(save_order);
    };
    
  @Post('/getorder')
  async getOrder(@Body() getreq:GetReqOrder): Promise<SaveUpdateResOrder>{
       const get_order:IOrder = <any> await new MainOrder().getOrder(getreq.Id);
       if(get_order === null) throw new CustomeError(404, 'Order is not found');
       return <SaveUpdateResOrder>get_order;
  };
  @Security("api_key")
  @Post('/getAllorder')
  async getOrderList(@Body() getreq:GetcustomerOrder): Promise<SaveUpdateResOrder[]> {
   
    const order: IOrder[] = await new MainOrder().getallOrder(getreq.Id);
    return <SaveUpdateResOrder[]>(order);
  

  };
}
