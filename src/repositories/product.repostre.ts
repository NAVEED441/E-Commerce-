import { IProduct } from "../types/document/IProduct";
import { ProductSchema } from "../model/Product.model";

export class MainProduct{
    constructor(){}
    saveProduct(saveprodct:IProduct){
        return new ProductSchema(saveprodct).save();
    }
    updateProduct(updatprodct:IProduct){
        return ProductSchema.findByIdAndUpdate(updatprodct._id, updatprodct,{
            new:true
        });
    }
    getProduct(_id:string){
         return ProductSchema.findById(_id);
    }
    deleteProduct(_id:string){
        return ProductSchema.findByIdAndDelete(_id);
    }
    getallProduct(){
        return ProductSchema.find();
    }

}