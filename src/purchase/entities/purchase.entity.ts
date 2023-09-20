import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { CustomerEntity } from "../../customer/entities/customer.entitiy";
import { PurchaseProductEntity } from "./purchases-products.entity";

@Entity({name:"purchase"})
export class PurchaseEntity extends BaseEntity {
    @Column()
    status!: string
    @Column()
    paymentMethod!:string
    @ManyToOne(()=>CustomerEntity,(customer)=> customer.purchases)
    customer!:CustomerEntity

    @OneToMany(()=>PurchaseProductEntity,(purchaseProduct)=>purchaseProduct.purchase)
    purchaseProduct!:PurchaseProductEntity[]
    
}