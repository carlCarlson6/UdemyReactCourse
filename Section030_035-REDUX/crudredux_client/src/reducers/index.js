import {combineReducers} from 'redux';
import productsReducer from './ProductsReducer';
import alertReducer from './AlertReducer';

export default combineReducers({
    products: productsReducer,
    alert: alertReducer
});