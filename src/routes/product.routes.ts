import express from 'express';
import { ProductController } from '../controller/Product.controller';

import { SaveReqProduct,UpdateReqProduct,DeletReqProduct,GetReqProduct } from '../types/request/Product.req';
import { SaveUpdateResProduct } from '../types/responce/Product.res';


export class ProductRoutes{
    router:express.Router;
    constructor(){
        this.router = express.Router();
        this.routes();
    }
    routes(){
        this.router.post("/saveproduct",async(req,res,next)=>{
            try{
            const savereq:SaveReqProduct = req.body;
            const  product:SaveUpdateResProduct = await new ProductController().saveproduct(savereq);
            res.status(200).json({
                message: product
              });
            }
            catch (err){
               next(err)
         }
            
        });
        this.router.put('/updateproduct', async(req,res,next)=>{
            try{
                const updatereq:UpdateReqProduct = req.body;
                const update_product:SaveUpdateResProduct = await new ProductController().updateProduct(updatereq);
                res.status(200).json({
                    message:update_product
                });
               
            }catch(err){
                next(err)
            }
        });
        this.router.delete('/deleteproduct', async(req,res,next)=>{
            try{
                const deletereq:DeletReqProduct=req.body;
                const delete_product = await new ProductController().deletproduct(deletereq);
                res.status(200).json
                ({
                   message:'product is deleted' 
                });

            }catch(err){
               next(err);
            }
        });
        this.router.post('/getproduct',async(req,res,next)=>{
            try{
                 const getreq:GetReqProduct=req.body;
                 const get_product:SaveUpdateResProduct =await new ProductController().getproduct(getreq);
                 res.send(get_product);
                } catch (error) {
                  next(error);
                }
              });
        this.router.get('/getproductslist', async(req,res,next)=>{
            try{
                const productlist: SaveUpdateResProduct[] = await new ProductController().getproductList();
                res.status(200).json({
                  result: productlist
                });

            }catch(err){}
        })      

            
    }
}
export const ProductApiRoutes = new ProductRoutes().router;