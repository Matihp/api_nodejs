import { Router } from "express";

export class BaseRouter<T>{
    public controller : T //se define el tipo
    public router : Router

    constructor( tController: {new():T}){
        this.router = Router()
        this.controller=new tController()
    }
    routes(){
        
    }
}