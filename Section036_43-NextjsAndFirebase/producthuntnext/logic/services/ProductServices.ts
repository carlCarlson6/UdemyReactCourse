import { IFormValue } from '../../common/models/entities/IFormValue';
import Router from "next/router";
import { User } from "firebase";
import { IProduct } from '../../common/models/entities/IProduct';
import { Firebase } from '../../database/firebase/Firebase';
import { unpackNewProductFormValues } from '../../common/utils/unpackValues/unpackNewProduct';
import { Dispatch, SetStateAction } from "react";
import { IUser } from '../../common/models/entities/IUser';
import { IComment } from '../../common/models/entities/IComment';

export class ProductServices {
    static GetCreateProductFn(user: User, firebase: Firebase, imageUrl:string): (productInfo: Array<IFormValue>) => Promise<void> {    
        return async (productInfo: Array<IFormValue>) => {
            if(!user) { 
                console.log('no user');
                Router.push('/')
            }

            const {name, company, url, description} = unpackNewProductFormValues(productInfo)
            const productCreator: IUser = {id: user.uid, name: user.displayName, email: user.email} 

            const product: IProduct = {name: name.value, company: company.value, url: url.value, description: description.value, imageUrl, votes: [], createdAt: Date.now(), createdBy: productCreator, comments: []};
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
            const {name, company, url, description, imageUrl, votes, comments, createdBy, createdAt} = product.data();
            return {id: product.id, name, company, url, description, imageUrl, votes, comments, createdBy, createdAt};
        } else {
            throw new Error('product does not exist');
        }
    }

    static GetAddCommentToProductFn(user: User, product: IProduct, firebase: Firebase, setProduct: Dispatch<SetStateAction<IProduct>>): (formCommentInfo: Array<IFormValue>) => Promise<void> {
        return async (formCommentInfo: Array<IFormValue>) => {
            const commentUser: IUser = { id: user.uid, email: user.email, name: user.displayName };
            const message: string = formCommentInfo.find(formValue => formValue.name === 'comment').value;
            const comment: IComment = { message, createdBy: commentUser, createdAt: Date.now() };

            console.log(comment)

            const comments: Array<IComment> = [...product.comments];
            comments.push(comment);

            await firebase.db.collection('products').doc(product.id).update({comments});
            setProduct({...product, comments});
        }
        
    }

    static async VoteProduct(user: User, product: IProduct, setProduct: Dispatch<SetStateAction<IProduct>>, firebase: Firebase): Promise<void> {
        if(!user) Router.push('/login');

        const votes = [...product.votes];
        votes.push(user.uid);

        await firebase.db.collection('products').doc(product.id).update({votes});
        setProduct({...product, votes})
    }

    static async DeleteProduct(productId: string, firebase: Firebase): Promise<void> {
        await firebase.db.collection('products').doc(productId).delete();
        Router.push('/');
    }

}