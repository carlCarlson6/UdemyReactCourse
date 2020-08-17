import {ADD_PRODUCT, ADD_PRODUCT_FAILURE, ADD_PRODUCT_SUCCESS} from '../types';

const initialState = {
    products: [],
    error: null,
    loading: false
}

const productsReducer = (state=initialState, action) => {
    switch(action.type) {
        
        default:
            return state;
    }
}

export default productsReducer;