import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customer/entities/customer.entitiy";

@Entity({name:"user"})
export class UserEntity extends BaseEntity {
    @Column()
    username!: string
    @Column({length:500})
    name!:string
    @Column()
    lastname!:string
    @Column()
    password!:string
    @Column()
    email!:string
    @Column({nullable:true})
    city!:string
    @Column()
    province!:string

    @OneToOne(()=> CustomerEntity, (customer => customer.user))
    customer!: CustomerEntity
}