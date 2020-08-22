import React, { Fragment } from 'react';
import { IProductDetails } from '../../common/models/components/IProductDetails';

 
const ProductDetails: React.FC<IProductDetails> = ({product}): JSX.Element => {
    return (
        <Fragment>
            <p>{product.name}</p>
        </Fragment>
    );
}
 
export default ProductDetails;