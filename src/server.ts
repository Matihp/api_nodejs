import morgan from "morgan";
import express, { Application }  from "express";
import cors from "cors";

class ServerBootstrap{
    public app: express.Application = express()
    private port: number = 8000

    constructor(){
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.listen()
        this.app.get('/api/prueba',this.routers())
    }
    routers(): Array<express.Router>{
        return []
    }
    public listen(){
        this.app.listen(this.port,()=>{
          console.log(this.port)   
        })
    }
}
new ServerBootstrap()