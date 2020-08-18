import {gql} from '@apollo/client'

export const productsQuery = gql`
    query {
        products {
            id name price
        }
    }`;

export const addProductMutation = gql`
    mutation AddProduct($name: String! $price: Float!) {
        addProduct(name: $name, price: $price) {
            id
        }
    }`;

export const deleteProductMutation = gql`
    mutation DeleteProduct($id: Float!) {
        deleteProduct(id: $id)
    }`;

export const editProductMutation = gql`
    mutation EditProduct($id: Float! $name: String! $price: Float!) {
        editProduct(id: $id, name: $name, price: $price) {
            id
        }
    }`