import { Resolver, Mutation, Arg, Query } from "type-graphql";
import Product from "../../entities/Product";

@Resolver()
class ProductResolver {

    @Query(() => Product)
    async Product(@Arg('id') id: number): Promise<Product> {
        const product = await Product.findOne(id);
        
        if(!product) { throw new Error('product not found') }

        return product;
    }

    @Query(() => [Product])
    async Products(@Arg('top') top: number | null = null): Promise<Array<Product>> {
        let products: Array<Product>;

        if(top === null){
            products = await Product.find();
        } else {
            products = await Product.find({take:top});
        }

        return products;
    }
    
    @Mutation(() => Product)
    async addProduct(@Arg('name') name: string, @Arg('value') value: number ): Promise<Product> {
        const newProduct = Product.create({name, value});
        await newProduct.save();

        return newProduct;
    }

    @Mutation(() => Product)
    async editProduct(@Arg('id') id: number, @Arg('name') name: string, @Arg('value') value: number ): Promise<void> {
        const product = await Product.findOne(id);
        
        if(!product) { throw new Error('product not found') }
    }

    @Mutation(() => Boolean)
    async deleteProduct(@Arg('id') id: number, @Arg('name') name: string, @Arg('value') value: number ): Promise<void> {
        const product = await Product.findOne(id);
        
        if(!product) { throw new Error('product not found') }
    }
}

export default ProductResolver;