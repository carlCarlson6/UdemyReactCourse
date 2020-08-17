import {ADD_PRODUCT, ADD_PRODUCT_FAILURE, ADD_PRODUCT_SUCCESS, PRODUCTS_DOWNLOAD_START, PRODUCTS_DOWNLOAD_SUCCESS, PRODUCTS_DOWNLOAD_FAILURE} from '../types';

const initialState = {
    products: [],
    error: false,
    loading: false
}

const productsReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT:
        case PRODUCTS_DOWNLOAD_START:
            return {...state, loading: true};
        
        case ADD_PRODUCT_SUCCESS:
            return {...state, loading: false, products: [...state.products, action.payload]};

        case ADD_PRODUCT_FAILURE:
        case PRODUCTS_DOWNLOAD_FAILURE:
            return {...state, loading: false, error: true};

        case PRODUCTS_DOWNLOAD_SUCCESS:
            return {...state, loading: false, products: action.payload};
        
        default:
            return state;
    }
}

export default productsReducer;