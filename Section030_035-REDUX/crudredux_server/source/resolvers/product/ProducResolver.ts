import { Resolver, Mutation, Arg, Query } from "type-graphql";
import Product from "../../entities/Product";

@Resolver()
class ProductResolver {

    @Query(() => Product)
    async product(@Arg('id') id: number): Promise<Product> {
        const product = await Product.findOne(id);
        
        if(!product) { throw new Error('product not found') }

        return product;
    }

    @Query(() => [Product])
    async products(@Arg('top', {defaultValue:null} ) top: number): Promise<Array<Product>> {
        let products: Array<Product>;
        if(top === null){
            products = await Product.find();
        } else {
            products = await Product.find({take:top});
        }

        return products;
    }
    
    @Mutation(() => Product)
    async addProduct(@Arg('name') name: string, @Arg('price') price: number ): Promise<Product> {
        const newProduct = Product.create({name, price});
        await newProduct.save();

        return newProduct;
    }

    @Mutation(() => Product)
    async editProduct(@Arg('id') id: number, @Arg('name') name: string, @Arg('price') price: number ): Promise<Product> {
        let product = await Product.findOne(id);
        if(!product) { throw new Error('product not found') }

        await Product.update({id}, {name, price});
        
        product = await Product.findOne(id);
        if(!product) { throw new Error('product not found') }
        
        return product;
    }

    @Mutation(() => Boolean)
    async deleteProduct(@Arg('id') id: number): Promise<Boolean> {
        let product = await Product.findOne(id);
        if(!product) { throw new Error('product not found') }
        
        await Product.delete({id});

        product = await Product.findOne(id);
        if(!product) {
            return true;
        } else {
            throw new Error('error deleting the product');
        }
        
    }
}

export default ProductResolver;