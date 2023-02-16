import * as dotenv from "dotenv"

export abstract class ConfigServer{
    constructor(){
        const n=this.createPath(this.nodeEnv)
        dotenv.config({
            path:n,
        })
    }
    public getEnvironment(k:string):string | undefined{
        return process.env[k]
    }
    public getEnv(k:string):number{
        return Number(this.getEnvironment(k))
    }
    public get nodeEnv():string{
        return this.getEnvironment("NODE_ENV")?.trim() || ""
    }
    public createPath(path:string):string{
        const arr: Array<string>=['env']
        if(path.length>0){
            const st=path.split('.')
            arr.unshift(...st)
        }
        return '.'+arr.join('.')
    }
}