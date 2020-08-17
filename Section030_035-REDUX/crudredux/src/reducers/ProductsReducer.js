import {actionTypes} from '../types';

const initialState = {
    products: [],
    error: false,
    loading: false,
    productDelete: null
}

const {ADD_PRODUCT, ADD_PRODUCT_FAILURE, ADD_PRODUCT_SUCCESS, PRODUCTS_DOWNLOAD_START, PRODUCTS_DOWNLOAD_SUCCESS, PRODUCTS_DOWNLOAD_FAILURE, PRODUCT_DELETE_GET, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAILURE} = actionTypes;

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
        
        case PRODUCT_DELETE_GET:
            return {...state, productDelete: action.payload};

        case PRODUCT_DELETE_SUCCESS:
            return {...state, productDelete: null, products: state.products.filter(product => product.id !== state.productDelete)};
        
        case PRODUCT_DELETE_FAILURE:
            return {...state, productDelete: null, error: true};

        default:
            return state;
    }
}

export default productsReducer;