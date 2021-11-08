import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { ShoppingCartContext } from '@/lib/shoppingCartContext';
import { Product } from '@/types/Product';
import { ProductDetailState } from '@/types/ProductDetailState';
import { ItemCart } from '@/types/ItemCart';
import changeQuantityItemCart from '@/lib/changeQuantityItemCart';


function ProductDetail() {
    const [state, setState] = useState<ProductDetailState>({
        product: {
            id: 0,
            name: '',
            cover: '/loading',
            price: '',
        },
        quantityItem: 0,
    });
    const { query } = useRouter();
    const [ context, setContext ] = useContext(ShoppingCartContext as any);

    const handleAddRemoveItem = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const action = e.currentTarget.getAttribute("data-action")
        changeQuantityItemCart(state.product, String(action), context, setContext)
    }

    useEffect( () => {
        if (!!query['product-detail'] && !!context.products) {
            const product = context.products.find( (product: Product) => product.id === Number(query['product-detail']));
            const itemContext = context.cart.filter((item: ItemCart) => item.id === Number(query['product-detail']));
            setState({
                ...state,
                product,
                quantityItem: itemContext.length > 0 ? itemContext[0].quantity : 0
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
                        <h1 className="text-center">Cantidad: {state.quantityItem}</h1>
                        <div className="flex justify-center">
                            <button data-action="add" onClick={handleAddRemoveItem} className="w-8 h-8 text-lg border hover:bg-gray-200">+</button>
                            <button data-action="remove" onClick={handleAddRemoveItem} className="w-8 h-8 text-lg border hover:bg-gray-200">-</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default ProductDetail;
