import { IProduct } from "../types/document/IProduct";
import { MainProduct } from "../repositories/product.repostre";
import { SaveReqProduct,UpdateReqProduct,GetReqProduct,DeletReqProduct } from "../types/request/Product.req";
import { SaveUpdateResProduct } from "../types/responce/Product.res";
import CustomeError from '../utills/error';
import { Tags,Body,Get,Post,Delete,Route,Put,SuccessResponse } from "tsoa";
@Route('product')
@Tags('product')
export class ProductController{
    constructor(){}
    @Post('/saveproduct')
    async saveproduct(@Body() savereq:SaveReqProduct):Promise<SaveUpdateResProduct>{
        const new_product:IProduct = await new MainProduct().saveProduct(<IProduct>(savereq));
          return <SaveUpdateResProduct>(new_product);
    }
    @Put('/updateproduct')
    async updateProduct(@Body() updatereq:UpdateReqProduct): Promise<SaveUpdateResProduct>{
        const update_cust:IProduct = await new MainProduct().updateProduct(<IProduct>(updatereq))
        if(update_cust===null){
            throw new CustomeError(400, 'Product not updated');
        }
        return <SaveUpdateResProduct>update_cust;
    }
    @Delete('/deleteproduct')
  @SuccessResponse("200","Product is deleted")
  async deletproduct(@Body() delreq: DeletReqProduct) {
    return await new MainProduct().deleteProduct(delreq._id);
  }
  @Post("/getproduct")
  async getproduct(@Body() getreq:GetReqProduct): Promise<SaveUpdateResProduct> {
    const get_product:IProduct =<any> await new MainProduct().getProduct(getreq._id);
    if (get_product === null) throw new CustomeError(404, 'Product is not found');
    return <SaveUpdateResProduct>get_product;
  }
  @Get('/getproductslist')
  async getproductList(): Promise<SaveUpdateResProduct[]> {
    const product: IProduct[] = await new MainProduct().getallProduct();
    return <SaveUpdateResProduct[]>(product);
  }
   

}