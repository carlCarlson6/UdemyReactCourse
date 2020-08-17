import {actionTypes} from '../types';
import { initialState } from '../common/InitialState';

const productsReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PRODUCT:
        case actionTypes.PRODUCTS_DOWNLOAD_START:
            return {...state, loading: true};
        
        case actionTypes.ADD_PRODUCT_SUCCESS:
            return {...state, loading: false, products: [...state.products, action.payload]};

        case actionTypes.ADD_PRODUCT_FAILURE:
        case actionTypes.PRODUCTS_DOWNLOAD_FAILURE:
        case actionTypes.PRODUCT_EDIT_FAILURE:
            return {...state, loading: false, error: true};

        case actionTypes.PRODUCTS_DOWNLOAD_SUCCESS:
            return {...state, loading: false, products: action.payload};
        
        case actionTypes.PRODUCT_DELETE_GET:
            return {...state, productDelete: action.payload};

        case actionTypes.PRODUCT_DELETE_SUCCESS:
            return {...state, productDelete: null, products: state.products.filter(product => product.id !== state.productDelete)};
        
        case actionTypes.PRODUCT_DELETE_FAILURE:
            return {...state, productDelete: null, error: true};

        case actionTypes.PRODUCT_EDIT_GET:
            return {}
        
        case actionTypes.PRODUCT_EDIT_GET:
            return {}
            

        default:
            return state;
    }
}

export default productsReducer;