import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../lib/shoppingCartContext';
import { Product } from '../types/Product';
import { ProductDetailState } from '../types/ProductDetailState';


function ProductDetail() {
    const [state, setState] = useState<ProductDetailState>({
        product: {
            id: 0,
            name: '',
            cover: '/loading',
            price: '',
        }
    });
    const { query } = useRouter();
    const [ context, setContext ] = useContext(ShoppingCartContext as any);

    useEffect( () => {
        if (!!query['product-detail'] && !!context.products) {
            const product = context.products.find( (product: Product) => product.id === Number(query['product-detail']));
            setState({
                ...state,
                product
            });
        }
    }, [query, context])

    return (
        <>
            <Link href="/">
                <a>Regresar</a>
            </Link>
            <div className="flex flex-col p-10">
                <h1>{state.product?.name}</h1>
                <div className="flex justify-between">
                    <div className="w-1/2">
                        <Image src={state.product.cover as any} alt="product-image" className="object-fill" width="100%" height="100%" />
                    </div>
                    <div className="w-1/2">
                        <p className="text-center">
                            {new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(Number(state.product?.price))}
                        </p>
                        <h1 className="text-center">Cantidad: 0</h1>
                        <div className="flex justify-center">
                            <button className="w-8 h-8 text-lg border hover:bg-gray-200">+</button>
                            <button className="w-8 h-8 text-lg border hover:bg-gray-200">-</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ProductDetail;
