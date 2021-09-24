import express from 'express';
import { CustomerController } from '../controller/customer.controller';
import  Jwt  from 'jsonwebtoken';
import { SaveReqCustomer, UpdateReqCustomer,LogInReq } from '../types/request/Customer.req';
import { SaveUpdateRes } from '../types/responce/Customer.Res';
export class CustomerRoutes {
    router: express.Router;
    constructor() {
      this.router = express.Router();
      this.routes();
    }
    routes(){
        this.router.post('/savecustomer', async (req, res, next) => {
            try {
              const customer: SaveReqCustomer = req.body;
              const new_customer:SaveUpdateRes = await new CustomerController().saveCustomer(customer);
              res.status(200).json({
                message: new_customer 
              });
            } catch (error) {
              next(error);
            }
          });
          this.router.post('/loginUser', async(req,res,next)=>{
            try{
                const authReq: LogInReq = req.body;
            const authUser = await new CustomerController().loginUser(authReq);
            if (authUser) {
                if (authReq.UserName === authUser.UserName && authReq.Password===authUser.Password) {
                    return res.json({
                        token: Jwt.sign({ _id: authUser._id }, 'this is the key'),
                        
                    });
                }
            } else {
                return res.status(400).json({
                    message: 'User NOt Found',
                });
            }

            }catch(err){

            }
        });
        this.router.put('/updatcustomer',async(req,res,next)=>{
            try{
                const updatereq:UpdateReqCustomer = req.body;
                const updatecustomer:SaveUpdateRes = await new CustomerController().updateCustomer(updatereq);
                res.status(200).json({
                    message:updatecustomer
                });

            }catch(error){
                next(error);
            }
        });
        
    }



}
export const CustomerRoutesApi = new CustomerRoutes().router;