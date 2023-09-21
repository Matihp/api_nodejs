import { Response ,Request } from "express";
import { UserService } from "../service/user.service";

export class UserController{
    constructor(private readonly userService: UserService = new UserService()){

    }
    async getUsers(req:Request , res:Response){
        try{
            const d = await this.userService.findAllUSer()
            res.status(200).json(d)
        }
        catch(e){
            console.error(e)
        }
    }
    async getUserById(req:Request , res:Response){
        const {id}=req.params
        try{
            const d = await this.userService.findById(id)
            res.status(200).json(d)
        }
        catch(e){
            console.error(e)
        }
    }
    async createUsers(req:Request , res:Response){
        try{
            const d = await this.userService.createUser(req.body)
            res.status(200).json(d)
        }
        catch(e){
            console.error(e)
        }
    }
    async deleteUsers(req:Request , res:Response){
        const {id}=req.params
        try{
            const d = await this.userService.deleteUser(id)
            res.status(200).json(d)
        }
        catch(e){
            console.error(e)
        }
    }
    
    async updateUsers(req:Request , res:Response){
        const {id}=req.params
        try{
            const d = await this.userService.updateUser(id,req.body)
            res.status(200).json(d)
        }
        catch(e){
            console.error(e)
        }
    }
}