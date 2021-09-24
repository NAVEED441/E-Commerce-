import express from 'express';
import { OrderController } from '../controller/Order.Controller';
import { SaveReqOrder,GetReqOrder } from '../types/request/Order.req';
import { SaveUpdateResOrder } from '../types/responce/Order.res';
import { auth } from '../midleware/Auth';

export class OrderRoutes{
    router : express.Router;
    constructor(){
        this.router=express.Router();
        this.routes();
    }
   
    routes(){
        this.router.post('/saveorder',async(req,res,next)=>{
            try{
                const saveorder:SaveReqOrder = req.body;
              const totalbill = saveorder.Product.map(e =>(
                  e.quantity * e.price
                    ))
                    console.log(totalbill);
                   const x = totalbill.reduce(this.bill)
                   console.log(x);
                   const data ={
                        Product:saveorder.Product,
                        Customer:saveorder.Customer,
                        Delivery:saveorder.Delivery,
                   
                        Bill:x,
                        TotalBill:x
                   }
                   console.log(data);
                  
               
                const new_order:SaveUpdateResOrder = await new OrderController().saveOrder(data);
                res.status(200).json({
                    message: new_order
                  });
            }catch(err){
                next(err)
            }
        });
        this.router.post('/getorder',async(req,res,next)=>{
            try{
                const getreq:GetReqOrder=req.body;
                const get_order:SaveUpdateResOrder =await new OrderController().getOrder(getreq);
                res.send(get_order);

            }catch(err){
                next(err);
            }
        });
        this.router.post('/getAllorder',auth,async(req,res,next)=>{
            try{
               const getreq:GetReqOrder = req.body;
                
                const productlist: SaveUpdateResOrder[] = await new OrderController().getOrderList(getreq);
                res.status(200).json({
                  result: productlist
                });
            }catch(err){}
        })
    }
   bill(x:number, y:number){
       
        return  x+y
          
    }
}
 
export const OrderApiRoutes = new OrderRoutes().router; 