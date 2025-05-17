import { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';
import { ProductCardView } from './ProductCardView';


export const CatalogView = ( { handler }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const finAll = async () => {
        const prods = await getProducts()
        setProducts(prods);
        setIsLoading(false);
    }
    useEffect(
        () => {
            finAll();
        }, []
    );

    return (
        <>
            {
                isLoading && <div className="alert alert-info">Cargando...</div>
            }
            <div className="row">
                {products.map(product => (

                    <div className="col-4 my-2" key={product.id}>
                        <ProductCardView
                            handler={handler}
                            id={product.id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    </div>
                ))}

            </div>
        </>

    );
}
