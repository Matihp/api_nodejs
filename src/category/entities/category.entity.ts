import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../../config/base.entity";
import { ProductEntity } from "../../product/entities/product.entity";

@Entity({name:"category"})
export class CategoryEntity extends BaseEntity {
    @Column()
    categpryName!: string

    @OneToMany(()=>ProductEntity,(product)=> product.category)
    products!:ProductEntity[]
}