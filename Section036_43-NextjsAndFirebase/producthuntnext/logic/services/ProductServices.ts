import { IFormValue } from '../../common/models/IFormValue';
import Router from "next/router";
import { User } from "firebase";
import { IProduct } from '../../common/models/IProduct';
import { Firebase } from '../../database/firebase/Firebase';
import { unpackNewProductFormValues } from '../../common/utils/unpackValues/unpackNewProduct';
import { Dispatch, SetStateAction } from "react";

export class ProductServices {
    static CreateAddProductFn(user: User, firebase: Firebase, imageUrl:string): (productInfo: Array<IFormValue>) => Promise<void> {    
        return async (productInfo: Array<IFormValue>) => {
            if(!user) { 
                console.log('no user');
                Router.push('/')
            }

            const {name, company, url, description} = unpackNewProductFormValues(productInfo)
            const product: IProduct = {name: name.value, company: company.value, url: url.value, description: description.value, imageUrl, votes: 0, createdAt: new Date(), createdBy: user.email, comments: []};
            firebase.db.collection('products').add(product);

            Router.push('/');
        };
    }

    static GetProductsByDate(firebase: Firebase, setProducts: Dispatch<SetStateAction<IProduct[]>>): void {
        const products = firebase.db.collection('products').orderBy('createdAt', 'desc').onSnapshot(this.manageProducts(setProducts));
    }

    static GetProductsByVotes(firebase: Firebase, setProducts: Dispatch<SetStateAction<IProduct[]>>) {
        const products = firebase.db.collection('products').orderBy('votes', 'desc').onSnapshot(this.manageProducts(setProducts));
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

}