import React from 'react';
import { IProductDetails } from '../../common/models/components/IProductDetails';
import { Image, Product, Description, Comments, Votes, Title, DescriptionText } from '../styles/layout/ProductStyles'
import formatDistanteToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale'
import Link from 'next/link';

 
const ProductDetails: React.FC<IProductDetails> = ({product}): JSX.Element => {

    return (
        <Product>    
            <Description>
                <div>
                    <Image src={product.imageUrl}/>
                </div>
                <div>
                    <Link
                        href="/products/[id]"
                        as={`/products/${product.id}`}
                    >
                        <Title>{product.name}</Title>
                    </Link>
                    
                    <DescriptionText>{product.description}</DescriptionText>
                
                    <Comments>
                        <div>
                            <img src="/static/img/comentario.png" />
                            <p>{product.comments.length} Comentarios</p>
                        </div>
                    </Comments>

                    <p>Publicado hace: {formatDistanteToNow(new Date(product.createdAt), {locale:es})}</p>
                </div>
            </Description>

            <Votes>
                <div>&#9650;</div>
                <p>{product.votes}</p>
            </Votes>
        </Product>
    );
}
 
export default ProductDetails;