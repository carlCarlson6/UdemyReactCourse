import {actionTypes} from '../types';
import { productInitialState } from '../common/InitialStates';

const productsReducer = (state=productInitialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PRODUCT:
        case actionTypes.PRODUCTS_DOWNLOAD_START:
        case actionTypes.PRODUCT_EDIT_START:
            return {...state, loading: true};
        
        case actionTypes.ADD_PRODUCT_SUCCESS:
            return {...state, loading: false, products: [...state.products, action.payload]};

        case actionTypes.ADD_PRODUCT_FAILURE:
        case actionTypes.PRODUCTS_DOWNLOAD_FAILURE:
            return {...state, loading: false, error: true};

        case actionTypes.PRODUCTS_DOWNLOAD_SUCCESS:
            return {...state, loading: false, products: action.payload};
        
        case actionTypes.PRODUCT_DELETE_GET:
            return {...state, productDelete: action.payload, loading: true};

        case actionTypes.PRODUCT_DELETE_SUCCESS:
            return {...state, loading: false, productDelete: null, products: state.products.filter(product => product.id !== state.productDelete)};
        
        case actionTypes.PRODUCT_DELETE_FAILURE:
            return {...state, productDelete: null, error: true};

        case actionTypes.PRODUCT_EDIT_GET:
            return {...state, productEdit: action.payload};
    
        case actionTypes.PRODUCT_EDIT_SUCCESS: 
            return {...state, loading: false, productEdit: null, 
                products: state.products.map(product => product.id === action.payload.id? product = action.payload: product)
            };

        case actionTypes.PRODUCT_EDIT_FAILURE:
            return {...state, error: true, productEdit: null};

        default:
            return state;
    }
}

export default productsReducer;