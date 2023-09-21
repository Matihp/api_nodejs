import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class UserDTO extends BaseDTO{
    @IsNotEmpty()
    username!: string
    @IsNotEmpty()
    name!:string
    @IsNotEmpty()
    lastname!:string
    @IsNotEmpty()
    password!:string
    @IsNotEmpty()
    email!:string
    @IsNotEmpty()
    city!:string
    @IsNotEmpty()
    province!:string

}