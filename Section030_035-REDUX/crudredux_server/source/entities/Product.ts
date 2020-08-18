import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity("crudredux-product")
class Product extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column({type:'float'})
    price: number;
}

export default Product;