import {ADD_PRODUCT, ADD_PRODUCT_FAILURE, ADD_PRODUCT_SUCCESS} from '../types';

const initialState = {
    products: [],
    error: false,
    loading: false
}

const productsReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT:
            return {...state, loading: true};
        
        case ADD_PRODUCT_SUCCESS:
            return {...state, loading: false, products: [...state.products, action.payload]};

        case ADD_PRODUCT_FAILURE:
            return {...state, loading: false, error: true};

        default:
            return state;
    }
}

export default productsReducer;