import express from 'express';
import { CustomerRoutesApi } from './Customer.routes';
import { ProductApiRoutes } from './product.routes';
import { OrderApiRoutes } from './Order.routes';
export class MainRouter{
    router:express.Router;
    constructor(){
        this.router=express.Router();
        this.routes();
    }
    routes() {
        this.router.use('/customer',CustomerRoutesApi);
        this.router.use('/product',ProductApiRoutes);
        this.router.use('/order',OrderApiRoutes);

    }
}
export const MainApi = new MainRouter().router;

