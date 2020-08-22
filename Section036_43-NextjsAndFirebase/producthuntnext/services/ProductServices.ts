import { IFormValue } from "../common/models/IFormValue";
import {firebase} from "../firebase";
import Router from "next/router";
import { User } from "firebase";
import { IProduct } from "../common/models/IProduct";
import { Firebase } from "../firebase/Firebase";
import { unpackNewProductFormValues } from "../common/unpackNewProduct";

export class ProductServices {
    static CreateAddProductFn(user: User, firebase: Firebase): (productInfo: Array<IFormValue>) => Promise<void> {    
        return async (productInfo: Array<IFormValue>) => {
            if(!user) { 
                console.log('no user');
                Router.push('/')
            }

            const {name, company, url, description, image} = unpackNewProductFormValues(productInfo)

            const product: IProduct = {name: name.value, company: company.value, url: url.value, description: description.value, image: image.value, votes: 0, createdAt: new Date(), createdBy: user.email, comments: []};

            firebase.db.collection('products').add(product);
        };
    }

}