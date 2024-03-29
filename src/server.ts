import morgan from "morgan";
import express  from "express";
import cors from "cors";
import { UserRouter } from "./user/user.router";
import { ConfigServer } from "./config/config";

class ServerBootstrap extends ConfigServer{
    public app: express.Application = express()
    private port: number = this.getEnv("PORT")

    constructor(){
        super()
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
        this.dbConnect()
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.get('/api',this.routers())
        this.listen() 
    }
    routers(): Array<express.Router>{
        return [new UserRouter().router]
    }
    public listen(){
        this.app.listen(this.port,()=>{
          console.log(this.port)   
        })
    }
}
new ServerBootstrap()