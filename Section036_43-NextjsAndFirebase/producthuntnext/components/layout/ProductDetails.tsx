import React from 'react';
import { IProductDetails } from '../../common/models/components/IProductDetails';
import { Image } from '../styles/layout/ProductStyles'
import formatDistanteToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale'
 
const ProductDetails: React.FC<IProductDetails> = ({product}): JSX.Element => {

    return (
        <li>    
            <div>
                <div>
                    <Image src={product.imageUrl}/>
                </div>
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                </div>
                <div>
                    <img src="/static/img/comentario.png" />
                    <p>{product.comments.length} Comentarios</p>
                </div>

                <p>Publicado hace: {formatDistanteToNow(new Date(product.createdAt), {locale:es})}</p>
            </div>

            <div>
                <div>&#9650;</div>
            </div>
        </li>
    );
}
 
export default ProductDetails;