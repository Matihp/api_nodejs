import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../config/base.entity";

@Entity({name:"user"})
export class UserEntity extends BaseEntity {
    @Column()
    username!: string
    @Column({length:500})
    name!:string
    @Column()
    lastname!:string
    @Column({nullable:true})
    job?:string
    @Column()
    numberPhone!:number
}