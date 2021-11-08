import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductItemProps } from '@/types/ProductItemProps';
import { ShoppingCartContext } from '@/lib/shoppingCartContext';
import { ItemCart } from '@/types/ItemCart';
import changeQuantityItemCart from '@/lib/changeQuantityItemCart';

export function ProductItem({ product, key }: ProductItemProps) {

    const [ state, setState ] = useState({
        quantityItem: 0
    })

    const [ context, setContext ] = useContext(ShoppingCartContext as any);

    const handleAddRemoveItem = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const action = e.currentTarget.getAttribute("data-action")
        changeQuantityItemCart(product, String(action), context, setContext)
    }

    useEffect( () => {
        if (!!context.cart) {
            const itemContext = context.cart.filter((item: ItemCart) => item.id === Number(product.id));
            setState({
                ...state,
                quantityItem: itemContext.length > 0 ? itemContext[0].quantity : 0
            });
        }
    }, [context])


    return(
        <React.Fragment key={key}>
            <li>
                <div className="flex flex-col h-120 xs:min-w-75 md:w-150 p-4 shadow-sm border-2 cursor-pointer hover:bg-gray-100">
                    <h1>{product.name}</h1>
                    <Image src={product.cover as any} alt="product-image" width="100%" height="240" objectFit="contain" />
                    <p className="text-center">
                        {new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(Number(product.price))}
                    </p>
                    <p className="text-center">Cantidad: {state.quantityItem}</p>
                    <div className="flex justify-center">
                        <button data-action="add" onClick={handleAddRemoveItem} className="w-8 h-8 text-lg border hover:bg-gray-200">+</button>
                        <button data-action="remove" onClick={handleAddRemoveItem} className="w-8 h-8 text-lg border hover:bg-gray-200">-</button>
                    </div>
                    <Link href={`/${product.id}`}>
                        <a className="text-indigo-500">Ver detalle</a>
                    </Link>
                </div>
            </li>
        </React.Fragment>
    )
}
