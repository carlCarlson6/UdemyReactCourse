import { IFormValue } from '../../common/models/entities/IFormValue';
import Router from "next/router";
import { User } from "firebase";
import { IProduct } from '../../common/models/entities/IProduct';
import { Firebase } from '../../database/firebase/Firebase';
import { unpackNewProductFormValues } from '../../common/utils/unpackValues/unpackNewProduct';
import { Dispatch, SetStateAction } from "react";
import { IUser } from '../../common/models/entities/IUser';

export class ProductServices {
    static CreateAddProductFn(user: User, firebase: Firebase, imageUrl:string): (productInfo: Array<IFormValue>) => Promise<void> {    
        return async (productInfo: Array<IFormValue>) => {
            if(!user) { 
                console.log('no user');
                Router.push('/')
            }

            const {name, company, url, description} = unpackNewProductFormValues(productInfo)
            const productCreator: IUser = {id: user.uid, name: user.displayName, email: user.email} 

            const product: IProduct = {name: name.value, company: company.value, url: url.value, description: description.value, imageUrl, votes: 0, createdAt: Date.now(), createdBy: productCreator, comments: []};
            firebase.db.collection('products').add(product);

            Router.push('/');
        };
    }

    static GetProductsByDate(firebase: Firebase, setProducts: Dispatch<SetStateAction<IProduct[]>>): void {
        firebase.db.collection('products').orderBy('createdAt', 'desc').onSnapshot(this.manageProducts(setProducts));
    }

    static GetProductsByVotes(firebase: Firebase, setProducts: Dispatch<SetStateAction<IProduct[]>>): void {
        firebase.db.collection('products').orderBy('votes', 'desc').onSnapshot(this.manageProducts(setProducts));
    }

    static manageProducts(setProducts: Dispatch<SetStateAction<IProduct[]>>) {
        return (snapshot) => {
            const products = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            setProducts(products);
        }
    }

    static async GetProductById(productId: any, firebase: Firebase): Promise<IProduct> {
        const productQuery = firebase.db.collection('products').doc(productId);
        const product = await productQuery.get();
        
        if(product.exists){
            const {id, name, company, url, description, imageUrl, votes, comments, createdBy, createdAt} = product.data();
            return {id, name, company, url, description, imageUrl, votes, comments, createdBy, createdAt};
        } else {
            throw new Error('product does not exist');
        }
    }

    static async AddCommentToProduct(productInfo: Array<IFormValue>): Promise<void> {
        console.log('adding product');
    }

}